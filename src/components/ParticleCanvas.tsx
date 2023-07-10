"use client";

import { useEffect } from "react";
import React from "react";
import Particles from "@/lib/particles";

const ParticleCanvas: React.FC = function () {
  useEffect(() => Particles.init(), []);

  return (
    <canvas
      className="pointer-events-none fixed inset-0 -z-30"
      id="particles"
    />
  );
};

export default ParticleCanvas;
