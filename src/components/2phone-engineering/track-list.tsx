/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import { useTwoPhoneEngineering } from "@/contexts/2phone-engineering-context";
import { Pause, Play } from "lucide-react";
import { cn } from "@/lib/utils";

const TrackList = () => {
  const {
    mixes,
    player,
    audioState,
    audioTimestamp,
    currentMixIdx,
    setCurrentMixIdx,
  } = useTwoPhoneEngineering();

  return (
    <div
      id="track-list"
      className="flex-col gap-2 hidden lg:flex bg-gray-100/20 divide-y divide-gray-500 backdrop-blur-sm p-6 rounded"
    >
      <h3 className="text-xl text-gray-700 font-old-english">l'ensemble</h3>
      <ul className="gap-4 pt-4 flex flex-col">
        {mixes.map(({ title, src }, idx) => (
          <li key={`mix-${idx + 1}`}>
            <button
              onClick={async () => {
                await new Promise((resolve) => setTimeout(resolve, 200));
                if (player.current) {
                  if (currentMixIdx === idx && audioState === "playing") {
                    void player.current.pause();
                  } else {
                    player.current.src = src;
                    setCurrentMixIdx(idx);
                    void player.current.play();
                  }
                }
              }}
              className="flex group items-center w-full justify-between hover:opacity-80 transition-opacity"
            >
              <div className="flex space-x-4 items-center">
                <div className="w-8 aspect-square rounded-lg bg-gray-800 grid place-content-center">
                  <p
                    className={cn(
                      "font-mono text-sm text-white group-hover:hidden",
                      {
                        hidden:
                          currentMixIdx === idx && audioState === "playing",
                      }
                    )}
                  >
                    {idx + 1}
                  </p>
                  <Play
                    className={cn("w-4 hidden", {
                      "group-hover:block": currentMixIdx !== idx,
                    })}
                  />
                  <Pause
                    className={cn("w-4 hidden", {
                      block: currentMixIdx === idx && audioState === "playing",
                    })}
                  />
                </div>
                <p className="font-mono text-gray-600">{title}</p>
              </div>
              <p className="font-mono text-sm text-gray-400">
                {player.current?.duration &&
                audioState === "playing" &&
                currentMixIdx === idx
                  ? `${Math.floor(audioTimestamp / 60000)}:${Math.floor(
                      (audioTimestamp / 1000) % 60
                    )
                      .toString()
                      .padStart(2, "0")}/${Math.floor(
                      player.current.duration / 60
                    )}:${Math.floor(player.current.duration % 60)
                      .toString()
                      .padStart(2, "0")}`
                  : null}
              </p>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrackList;
