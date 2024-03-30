"use client";
import * as React from "react";
import { animated, config, useSpring, useTransition } from "@react-spring/web";

const newText = (text: string) => ({ key: `${Date.now()}`, data: text });

interface TextTransitionProps {
  text: string;
  inline?: boolean;
  className?: string;
  springConfig: "default" | "gentle" | "wobbly" | "stiff" | "slow" | "molasses";
}

const TextTransition = ({
  text,
  inline = false,
  className,
  springConfig = "default",
}: TextTransitionProps) => {
  const placeholderRef = React.useRef<HTMLSpanElement | null>(null);
  const [content, setContent] = React.useState(() => newText(text.toString()));
  const [timeoutId, setTimeoutId] = React.useState(0);
  const [isFirstRun, setIsFirstRun] = React.useState(true);
  const [width, setWidth] = React.useState({ width: inline ? 0 : "auto" });

  const transitions = useTransition([content], {
    from: { opacity: 0, transform: "translateY(100%)" },
    enter: { opacity: 1, transform: "translateY(0%)" },
    leave: { opacity: 0, transform: "translateY(-100%)" },
    keys: (item) => item.key,
    config: config[springConfig],
    immediate: isFirstRun,
    onDestroyed: () => {
      setIsFirstRun(false);
    },
  });

  const animatedProps = useSpring({
    to: width,
    config: config[springConfig],
    immediate: isFirstRun,
  });

  React.useEffect(() => {
    setTimeoutId(
      window.setTimeout(() => {
        if (!placeholderRef.current) return;
        placeholderRef.current.innerHTML = text.toString();

        if (inline) setWidth({ width: placeholderRef.current.offsetWidth });
        setContent(newText(text.toString()));
      }, 0)
    );
  }, [inline, text]);

  React.useEffect(() => () => clearTimeout(timeoutId), [timeoutId]);

  return (
    <animated.div
      className={`text-transition ${className}`}
      style={{
        ...animatedProps,
        whiteSpace: inline ? "nowrap" : "normal",
        display: inline ? "inline-block" : "block",
        position: "relative",
      }}
    >
      <span
        ref={placeholderRef}
        style={{ visibility: "hidden" }}
        className="text-transition_placeholder"
      />
      <div
        className="text-transition_inner"
        style={{
          overflow: "visible",
          display: "block",
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
        }}
      >
        {transitions((styles, item) => (
          <animated.p
            style={{ ...styles, position: "absolute" }}
            className="h-auto max-w-[250px] overflow-hidden text-ellipsis lg:max-w-[400px]"
          >
            {item.data}
          </animated.p>
        ))}
      </div>
    </animated.div>
  );
};

export default TextTransition;
