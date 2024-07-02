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
import LabeledButton from "./labeled-button";
import { BorderBeam } from "../ui/border-beam";
import { CardContainer } from "../ui/3d-card";

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

export const interactiveButton =
  "hover:opacity-80 lg:active:translate-y-0.5 transition-transform lg:active:scale-[99%]";
const Sampler = () => {
  const [clickAudio, setClickAudio] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    setClickAudio(new Audio("/audio/click.m4a"));
  }, []);

  const sliderRef = useRef<HTMLDivElement | null>(null);

  const playClickEffect = () => {
    if (!clickAudio) return;
    if (clickAudio.currentTime != 0) {
      clickAudio.currentTime == 0;
    }
    clickAudio.play();
  };

  return (
    <CardContainer
      className={cn(
        "w-[42rem] scale-50 md:scale-75 lg:scale-100 select-none drop-shadow-2xl h-[55rem] rounded-sm overflow-hidden flex flex-col bg-gradient-to-br from-neutral-500 to-neutral-300",
        univers.className
      )}
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
            "bg-black ml-4  drop-shadow-2xl px-6 space-x-6 pt-1 text-white "
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
          className={cn(universThin.className, "ml-8 px-2 pt-1 text-gray-600")}
        >
          POWER
        </button>
      </div>
      <div className="bg-gray-200 w-full grid-cols-4 grid">
        <div className="col-span-3 h-full pl-4 pt-4 w-full flex flex-col space-y-8">
          <div className="flex flex-col">
            <h3 className="text-2xl">O.V.O. II</h3>
            <span className="text-orange-500">ディージェイ</span>
          </div>
          <span className={cn(universThin.className, "pb-1")}>
            MIXTAPE BY 2PHONESAMC
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
          <Battery className="text-red-500 w-4 h-4 animate-pulse" fill="red" />
          <Keyboard className="text-white opacity-20 w-4 h-4" />
          <MicOff className="text-white opacity-20 w-4 h-4" />
          <VolumeX className="text-white opacity-20 w-4 h-4" />
        </div>
        <div className="grid row-span-full grid-subgrid grid-flow-row col-span-2 gap-1">
          <BarChart className="text-white opacity-20 w-4 h-4" />
          <Cable className="text-white opacity-20 w-4 h-4" />
          <TrendingUp className="text-green-400 w-4 h-4" />
          <PieChart className="text-white opacity-20 w-4 h-4" />
        </div>
        <div className="row-span-full flex flex-col p-6 h-full w-full col-span-8 pr-12 gap-1">
          <div className="p-6 w-full relative h-16 bg-gray-900 grid place-content-center">
            <p className="font-mono text-4xl tracking-tighter text-white">
              <span className="opacity-20 mr-1.5">0</span>
              1.9.3
            </p>
            <BorderBeam />
          </div>
        </div>
        <div className="grid row-span-full grid-subgrid grid-flow-row col-span-2 gap-1">
          <Disc3 className="text-cyan-400 animate-spin w-4 h-4" />
          <span className="text-white text-sm pt-1 font-mono">K0</span>
          <Globe className="text-white opacity-20 w-4 h-4" />
          <Shuffle className="text-white opacity-20 w-4 h-4" />
        </div>
        <div className="grid row-span-full grid-subgrid grid-flow-row col-span-2 gap-1">
          <Music className="text-white opacity-20 w-4 h-4" />
          <BoomBox className="text-orange-400 w-4 h-4" />
          <Table className="text-white opacity-20 w-4 h-4" />
          <Sparkles className="text-yellow-400 w-4 h-4" />
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
            onClick={playClickEffect}
            customContent={
              <div className="flex justify-center w-[60px]">
                <Plus className="text-gray-600" />
              </div>
            }
          />
          <Pad
            hideIndicator
            className="bg-neutral-300 p-0 grid place-content-center"
            onClick={playClickEffect}
            customContent={
              <div className="flex justify-center w-[60px]">
                <Minus className="text-gray-600" />
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
          <Pad
            className="bg-neutral-600 p-0"
            onClick={playClickEffect}
            customContent={
              <div className="w-[60px] flex justify-center pt-2">
                <p className="text-[10px] text-white">PLAY</p>
              </div>
            }
          />
        </div>
      </div>
    </CardContainer>
  );
};

export default Sampler;
