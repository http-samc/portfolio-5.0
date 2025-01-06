"use client";
import { univers, universThin } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import {
  Battery,
  Disc3,
  Globe,
  Keyboard,
  KeyboardIcon,
  MicOff,
  Music,
  PieChart,
  Shuffle,
  TrendingUp,
  VolumeX,
  BoomBox,
  Table,
  BarChart,
  Cable,
  Sparkles,
  Plus,
  Minus,
  Asterisk,
  Undo2,
  Redo2,
  ArrowUpFromLine,
  ArrowDownFromLine,
} from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import Pad from "./pad";
import Knob from "./knob";
import type { Audio } from "../../../sanity/schema";
import LabeledButton from "./labeled-button";
import { BorderBeam } from "../ui/border-beam";
import { CardContainer } from "../ui/3d-card";
import Marquee from "../ui/marquee";
import { ArcherContainer, ArcherElement } from "react-archer";
import { Mix } from "@/app/(2phone-engineering)/2phone-engineering/page";
import { useTwoPhoneEngineering } from "@/contexts/2phone-engineering-context";

const PAD_PROPS = [
  {
    indicatorName: undefined,
    customContent: (
      <div className="w-[60px] flex flex-col h-full items-start justify-between pb-0.5">
        <p className="text-lg font-mono text-white text-start">A</p>
        <Asterisk className="text-white -ml-1" size={16} />
      </div>
    ),
  },
  {
    indicatorName: "LEVEL",
    label: "7",
  },
  {
    indicatorName: "PITCH",
    label: "8",
  },
  {
    indicatorName: "TIME",
    label: "9",
  },
  {
    indicatorName: undefined,
    customContent: (
      <div className="w-[60px] flex flex-col h-full items-start justify-between pb-0.5">
        <p className="text-lg font-mono text-white text-start">B</p>
        <Redo2 className="text-white rotate-180 -ml-1" size={14} />
      </div>
    ),
  },
  {
    indicatorName: "LPF",
    label: "4",
  },
  {
    indicatorName: "HPF",
    label: "5",
  },
  {
    indicatorName: "FX",
    label: "6",
  },
  {
    indicatorName: undefined,
    customContent: (
      <div className="w-[60px] flex flex-col h-full items-start justify-between pb-0.5">
        <p className="text-lg font-mono text-white text-start">C</p>
        <ArrowUpFromLine className="text-white -ml-1" size={14} />
      </div>
    ),
  },
  {
    indicatorName: "ATK",
    label: "1",
  },
  {
    indicatorName: "REL",
    label: "2",
  },
  {
    indicatorName: "PAN",
    label: "3",
  },
  {
    indicatorName: undefined,
    customContent: (
      <div className="w-[60px] flex flex-col h-full items-start justify-between pb-0.5">
        <p className="text-lg font-mono text-white text-start">D</p>
        <ArrowDownFromLine className="text-white -ml-1" size={14} />
      </div>
    ),
  },
  {
    indicatorName: "TUNE",
    label: ".",
  },
  {
    indicatorName: "VEL",
    label: "0",
  },
  {
    indicatorName: "MOD",
    customContent: (
      <div className="w-[60px] flex justify-center pt-2">
        <p className="text-[10px] text-white">RECORD</p>
      </div>
    ),
  },
];

const formatTimestamp = (timestamp: string) => (
  <>
    {Array.apply(
      null,
      Array(5 - (timestamp.length > 5 ? 5 : timestamp.length))
    ).map((_, idx) => (
      <span className="opacity-20 mr-1" key={`placeholder-0-${idx}`}>
        0
      </span>
    ))}
    {timestamp
      .split("")
      .filter((e) => !!e.replace(" ", ""))
      .map((digit, idx) => (
        <span className="" key={`digit-${idx}`}>
          {digit}
        </span>
      ))}
  </>
);

function getRandomNumbers() {
  const numbers: number[] = [];
  const count = Math.floor(Math.random() * 4) + 3; // Randomly choose a number between 3 and 6
  while (numbers.length < count) {
    const randomNumber = Math.floor(Math.random() * 16); // Randomly choose a number between 0 and 15
    if (!numbers.includes(randomNumber)) {
      numbers.push(randomNumber);
    }
  }
  return numbers;
}

export const interactiveButton =
  "hover:opacity-80 lg:active:translate-y-0.5 transition-transform lg:active:scale-[99%]";

const Sampler = () => {
  const {
    player,
    audioState,
    currentMixIdx,
    setCurrentMixIdx,
    mixes,
    audioTimestamp,
  } = useTwoPhoneEngineering();
  const [clickAudio, setClickAudio] = useState<HTMLAudioElement | null>(null);
  const [activeButtons, setActiveButtons] = useState<number[]>([]);

  useEffect(() => {
    if (player.current) {
      player.current.setAttribute("src", mixes[currentMixIdx]!.src);
      player.current.currentTime = 0;
      if (audioState === "playing") {
        void player.current.play();
      } else {
        player.current.load();
      }
    }
  }, [currentMixIdx, mixes, player, audioState]);

  useEffect(() => {
    setClickAudio(new Audio("/audio/click.m4a"));
    const interval = setInterval(() => {
      setActiveButtons(getRandomNumbers());
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const sliderRef = useRef<HTMLDivElement | null>(null);

  const playClickEffect = () => {
    if (!clickAudio) return;
    clickAudio.play();
  };
  const playMix = () => {
    if (!player.current) return;
    if (audioState === "playing") {
      void player.current.pause();
    } else {
      void player.current.play();
    }
  };

  return (
    <>
      <ArcherContainer strokeColor="black">
        <CardContainer
          className={cn(
            "w-[42rem] -mt-36 lg:mt-0 scale-50 lg:scale-100 select-none drop-shadow-2xl h-[55rem] rounded-sm overflow-hidden flex flex-col bg-gradient-to-br from-neutral-500 to-neutral-300",
            univers.className
          )}
          containerClassName="py-0 lg:py-20"
        >
          <div className="h-7 bg-gray-300 w-full flex text-[10px] justify-start">
            <button
              className={cn(
                universThin.className,
                "bg-gray-100 drop-shadow-2xl ml-8 px-2 pt-1 text-gray-600"
              )}
            >
              OUTPUT
            </button>
            <button
              className={cn(
                universThin.className,
                "bg-orange-500 drop-shadow-2xl ml-16 px-2 pt-1 text-white"
              )}
            >
              INPUT
            </button>
            <button
              className={cn(
                universThin.className,
                "bg-black ml-4 drop-shadow-2xl px-6 space-x-6 pt-1 text-white "
              )}
            >
              <span>SYNC</span>
              <span>MIDI</span>
            </button>
            <button
              className={cn(
                universThin.className,
                "bg-gray-600 ml-16 drop-shadow-2xl px-2 pt-1 text-white "
              )}
            >
              USB
            </button>
            <button
              className={cn(
                universThin.className,
                "ml-8 px-2 pt-1 text-gray-600"
              )}
            >
              POWER
            </button>
          </div>
          <div className="bg-gray-200 w-full grid-cols-4 grid">
            <div className="col-span-3 h-full pl-4 pt-4 w-full flex flex-col space-y-8">
              <div className="flex flex-col">
                <h3 className="text-2xl text-gray-600">O.V.O. II</h3>
                <span className="text-orange-500">ディージェイ</span>
              </div>
              <span className={cn(universThin.className, "pb-1 text-gray-600")}>
                MIXES BY 2PHONESAMC
              </span>
            </div>
            <div className="w-full h-full bg-gray-500 grid grid-cols-12 pl-2 pt-3 pb-1">
              {Array.apply(null, Array(144)).map((_, idx) => (
                <div
                  className="w-1 h-1 rounded-full bg-gray-800"
                  key={`speaker-grill-${idx}`}
                ></div>
              ))}
            </div>
          </div>
          <div className="h-36 bg-black w-full grid grid-rows-4 grid-cols-16 gap-4 drop-shadow-2xl p-6">
            <div className="grid row-span-full grid-subgrid grid-flow-row col-span-2 gap-1">
              <Battery
                className={cn(
                  "text-white opacity-20 w-4 h-4",
                  activeButtons.includes(0) &&
                    audioState === "playing" &&
                    "text-red-400 opacity-100 transition-all"
                )}
              />
              <Keyboard
                className={cn(
                  "text-white opacity-20 w-4 h-4",
                  activeButtons.includes(1) &&
                    audioState === "playing" &&
                    "text-yellow-400 opacity-100 transition-all"
                )}
              />
              <MicOff
                className={cn(
                  "text-white opacity-20 w-4 h-4",
                  activeButtons.includes(2) &&
                    audioState === "playing" &&
                    "text-pink-400 opacity-100 transition-all"
                )}
              />
              <VolumeX
                className={cn(
                  "text-white opacity-20 w-4 h-4",
                  activeButtons.includes(3) &&
                    audioState === "playing" &&
                    "text-purple-400 opacity-100 transition-all"
                )}
              />
            </div>
            <div className="grid row-span-full grid-subgrid grid-flow-row col-span-2 gap-1">
              <BarChart
                className={cn(
                  "text-white opacity-20 w-4 h-4",
                  activeButtons.includes(4) &&
                    audioState === "playing" &&
                    "text-indigo-400 opacity-100 transition-all"
                )}
              />
              <Cable
                className={cn(
                  "text-white opacity-20 w-4 h-4",
                  activeButtons.includes(5) &&
                    audioState === "playing" &&
                    "text-lime-300 opacity-100 transition-all"
                )}
              />
              <TrendingUp
                className={cn(
                  "text-white opacity-20 w-4 h-4",
                  activeButtons.includes(6) &&
                    audioState === "playing" &&
                    "text-sky-400 opacity-100 transition-all"
                )}
              />
              <PieChart
                className={cn(
                  "text-white opacity-20 w-4 h-4",
                  activeButtons.includes(7) &&
                    audioState === "playing" &&
                    "text-fuchsia-400 opacity-100 transition-all"
                )}
              />
            </div>
            <div className="row-span-full -mt-8 flex flex-col p-6 h-full w-full col-span-8 pr-12 gap-1">
              <div className="px-2 pt-7 pb-1 w-full relative bg-gray-900 grid place-content-center">
                <div className="font-mono text-4xl text-white w-full flex justify-center">
                  {formatTimestamp((audioTimestamp / 1000).toFixed(1))}
                </div>
                <p className="absolute top-2.5 text-xs left-2 font-mono text-gray-500">
                  Track no.
                </p>
                <p className="absolute top-2.5 text-xs right-2 font-mono text-gray-500">
                  {currentMixIdx + 1}/{mixes.length}
                </p>
                <Marquee
                  className="[--duration:3s]"
                  pauseOnHover
                  disabled={audioState !== "playing"}
                >
                  <p className="text-xs text-gray-400 font-mono">
                    {mixes[currentMixIdx]!.title}
                  </p>
                </Marquee>
                {/* <BorderBeam /> */}
              </div>
            </div>
            <div className="grid row-span-full grid-subgrid grid-flow-row col-span-2 gap-1">
              <Disc3
                className={cn(
                  "text-white opacity-20 w-4 h-4",
                  activeButtons.includes(8) &&
                    audioState === "playing" &&
                    "text-violet-400 opacity-100 transition-all"
                )}
              />
              <span
                className={cn(
                  "text-white opacity-20 pt-1 font-mono text-sm",
                  activeButtons.includes(9) &&
                    audioState === "playing" &&
                    "opacity-100 transition-all"
                )}
              >
                K0
              </span>
              <Globe
                className={cn(
                  "text-white opacity-20 w-4 h-4",
                  activeButtons.includes(10) &&
                    audioState === "playing" &&
                    "text-red-400 opacity-100 transition-all"
                )}
              />
              <Shuffle
                className={cn(
                  "text-white opacity-20 w-4 h-4",
                  activeButtons.includes(11) &&
                    audioState === "playing" &&
                    "text-orange-400 opacity-100 transition-all"
                )}
              />
            </div>
            <div className="grid row-span-full grid-subgrid grid-flow-row col-span-2 gap-1">
              <Music
                className={cn(
                  "text-white opacity-20 w-4 h-4",
                  activeButtons.includes(12) &&
                    audioState === "playing" &&
                    "text-sky-400 opacity-100 transition-all"
                )}
              />
              <BoomBox
                className={cn(
                  "text-white opacity-20 w-4 h-4",
                  activeButtons.includes(13) &&
                    audioState === "playing" &&
                    "text-yellow-400 opacity-100 transition-all"
                )}
              />
              <Table
                className={cn(
                  "text-white opacity-20 w-4 h-4",
                  activeButtons.includes(14) &&
                    audioState === "playing" &&
                    "text-blue-400 opacity-100 transition-all"
                )}
              />
              <Sparkles
                className={cn(
                  "text-white opacity-20 w-4 h-4",
                  activeButtons.includes(15) &&
                    audioState === "playing" &&
                    "text-yellow-400 opacity-100 transition-all"
                )}
              />
            </div>
          </div>
          <div className="px-6 pb-6 pt-3 grid grid-cols-7 grid-flow-col h-full grid-rows-5 gap-4">
            <Knob indicatorClassName="text-gray-400" className="bg-gray-200" />
            <div className="flex flex-col justify-between">
              <div className="bg-black w-full h-7 overflow-hidden">
                <button
                  className={cn(
                    interactiveButton,
                    universThin.className,
                    "bg-gray-900 border-gray-600 rounded-lg text-white w-full h-full"
                  )}
                  onClick={playClickEffect}
                >
                  <p className="pt-0.5 text-xs">KEYS</p>
                </button>
              </div>
              <div className="bg-black w-full h-7 overflow-hidden">
                <button
                  className={cn(
                    interactiveButton,
                    universThin.className,
                    "bg-gray-800 border-gray-600 rounded-lg text-white w-full h-full"
                  )}
                  onClick={playClickEffect}
                >
                  <p className="pt-0.5 text-xs">FADER</p>
                </button>
              </div>
            </div>
            <div className="row-span-3 flex flex-col items-center justify-around">
              <div className="w-2 h-32 bg-black rounded-full relative grid place-content-center">
                <div className="absolute w-12 h-px bg-gray-700 -left-5 top-[63px]"></div>
                <div
                  ref={sliderRef}
                  // onClick={(e) => console.log(e.movementY)}
                  className="w-6 h-6 bg-gray-600 border-gray-400 z-20 border rounded-full drop-shadow-2xl"
                ></div>
              </div>
              <div className="bg-black w-full h-7 overflow-hidden grid place-content-center">
                <button
                  className={cn(
                    interactiveButton,
                    universThin.className,
                    "bg-neutral-400 border-gray-600 border rounded-lg text-white w-[74px] h-[26px]"
                  )}
                  onClick={playClickEffect}
                >
                  <p className="pt-0.5 text-xs">SHIFT</p>
                </button>
              </div>
            </div>
            <div className="col-span-4 flex space-x-6 items-center">
              <LabeledButton
                button="SOUND"
                buttonClassName="bg-black text-white"
                label="EDIT"
                labelClassName="bg-white text-gray-600"
                onClick={playClickEffect}
              />
              <LabeledButton
                button="MAIN"
                buttonClassName="bg-black text-white"
                label="COMMIT"
                labelClassName="bg-orange-500 text-white"
                onClick={playClickEffect}
              />
              <LabeledButton
                button="TEMPO"
                buttonClassName="bg-black text-white"
                label="LOOP"
                labelClassName="text-white bg-gray-500"
                onClick={playClickEffect}
              />
            </div>
            <div className="col-span-4 row-span-4 h-full grid gap-1 grid-rows-4 grid-cols-4">
              {Array.apply(null, Array(16)).map((_, idx) => (
                <Pad
                  key={`pad-${idx}`}
                  onClick={playClickEffect}
                  className={cn({
                    "bg-gray-900 border-gray-500": idx % 4 !== 0,
                    "bg-neutral-400": idx % 4 == 0,
                  })}
                  {...PAD_PROPS[idx]}
                />
              ))}
            </div>
            <div className="col-span-2 grid grid-cols-2 py-2 gap-4 row-span-full">
              <Knob
                indicatorClassName="text-orange-900"
                className="bg-orange-500"
              />
              <Knob indicatorClassName="text-gray-700" className="bg-black" />
              <div className="col-span-full pt-4"></div>
              <LabeledButton
                button="SAMPLE"
                buttonClassName="bg-orange-500 text-white"
                label="CHOP"
                labelClassName="bg-white text-gray-600"
                onClick={playClickEffect}
              />
              <LabeledButton
                button="TIMING"
                buttonClassName="bg-black text-white"
                label="CORRECT"
                labelClassName="bg-white text-gray-600"
                onClick={playClickEffect}
              />
              <div className="col-span-full pt-4"></div>
              <LabeledButton
                button="FX"
                buttonClassName="bg-black text-white"
                label="OUTPUT"
                labelClassName="bg-white text-gray-600"
                onClick={playClickEffect}
              />
              <LabeledButton
                button="ERASE"
                buttonClassName="bg-white text-gray-600"
                label="SYSTEM"
                labelClassName="bg-white text-gray-600"
                onClick={playClickEffect}
              />
              <div className="col-span-full"></div>
              <Pad
                hideIndicator
                className="bg-neutral-300 p-0 grid place-content-center"
                onClick={() => {
                  if (currentMixIdx > 0) {
                    playClickEffect();
                    setCurrentMixIdx(currentMixIdx - 1);
                  } else {
                    // TODO: Some disabled sound
                  }
                }}
                customContent={
                  <div className="flex justify-center w-[60px]">
                    <Minus className="text-gray-600" />
                  </div>
                }
              />
              <Pad
                hideIndicator
                className="bg-neutral-300 p-0 grid place-content-center"
                onClick={() => {
                  if (currentMixIdx < mixes.length - 1) {
                    playClickEffect();
                    setCurrentMixIdx(currentMixIdx + 1);
                  } else {
                    // TODO: Some disabled sound
                  }
                }}
                customContent={
                  <div className="flex justify-center w-[60px]">
                    <Plus className="text-gray-600" />
                  </div>
                }
              />

              <Pad
                className="bg-orange-500 p-0"
                onClick={playClickEffect}
                customContent={
                  <div className="w-[60px] flex justify-center pt-2">
                    <p className="text-[10px] text-white">RECORD</p>
                  </div>
                }
                doubleIndicator
              />
              <ArcherElement id="play-btn">
                <Pad
                  className="bg-neutral-600 p-0"
                  onClick={async () => {
                    playClickEffect();
                    await new Promise((resolve) => setTimeout(resolve, 200));
                    playMix();
                  }}
                  customContent={
                    <div className="w-[60px] relative flex justify-center pt-2">
                      <p className="text-[10px] text-white">PLAY</p>
                      <span
                        className={cn(
                          "absolute bg-green-400 rounded-full w-5 h-5 top-8 right-5 animate-ping",
                          {
                            hidden: audioState === "playing",
                          }
                        )}
                      ></span>
                    </div>
                  }
                />
              </ArcherElement>
            </div>
          </div>
        </CardContainer>
        {/* <ArcherElement
          id="start-label"
          relations={[
            {
              targetId: "play-btn",
              targetAnchor: "bottom",
              sourceAnchor: "right",
              style: {
                strokeColor: "#",
              },
            },
          ]}
        >
          <p>Start</p>
        </ArcherElement> */}
      </ArcherContainer>
    </>
  );
};

export default Sampler;
