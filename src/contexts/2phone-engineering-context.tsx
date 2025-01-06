"use client";

import { Mix } from "@/app/(2phone-engineering)/2phone-engineering/page";
import React, { createContext, useContext, useRef, useState } from "react";

interface TwoPhoneEngineeringContextType {
  player: React.RefObject<HTMLAudioElement>;
  audioState: "playing" | "paused";
  setAudioState: (state: "playing" | "paused") => void;
  currentMixIdx: number;
  setCurrentMixIdx: (idx: number) => void;
  mixes: Mix[];
  audioTimestamp: number;
}

const TwoPhoneEngineeringContext =
  createContext<TwoPhoneEngineeringContextType | null>(null);

export const TwoPhoneEngineeringProvider = ({
  children,
  mixes,
}: {
  children: React.ReactNode;
  mixes: Mix[];
}) => {
  const player = useRef<HTMLAudioElement>(null);
  const [audioState, setAudioState] = useState<"playing" | "paused">("paused");
  const [currentMixIdx, setCurrentMixIdx] = useState(0);
  const [audioTimestamp, setAudioTimestamp] = useState(0);

  return (
    <TwoPhoneEngineeringContext.Provider
      value={{
        player,
        audioState,
        setAudioState,
        currentMixIdx,
        setCurrentMixIdx,
        mixes,
        audioTimestamp,
      }}
    >
      {children}
      <audio
        ref={player}
        onTimeUpdate={(e) => {
          setAudioTimestamp(e.currentTarget.currentTime * 1000);
        }}
        onPlay={() => setAudioState("playing")}
        onPause={() => setAudioState("paused")}
        onEnded={async () => {
          if (currentMixIdx < mixes.length - 1) {
            setCurrentMixIdx(currentMixIdx + 1);
          } else {
            setCurrentMixIdx(0);
          }
          await new Promise((resolve) => setTimeout(resolve, 500));
          void player.current?.play();
        }}
        className="hidden"
      />
    </TwoPhoneEngineeringContext.Provider>
  );
};

export const useTwoPhoneEngineering = () => {
  const context = useContext(TwoPhoneEngineeringContext);
  if (!context) {
    throw new Error(
      "useTwoPhoneEngineering must be used within a TwoPhoneEngineeringProvider"
    );
  }
  return context;
};
