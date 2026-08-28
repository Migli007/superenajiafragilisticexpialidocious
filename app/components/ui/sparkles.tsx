"use client";

import React, { useEffect, useMemo, useState } from "react";
import Particles from "@tsparticles/react";
import type { ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

interface SparklesCoreProps {
  id?: string;
  className?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  particleDensity?: number;
  particleColor?: string;
  speed?: number;
}

export function SparklesCore({
  id = "tsparticles",
  className = "",
  background = "transparent",
  minSize = 0.4,
  maxSize = 1,
  particleDensity = 100,
  particleColor="#22c55e",
  speed = 1,
}: SparklesCoreProps) {
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    loadSlim().then(() => {
      setInitialized(true);
    });
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: background,
        },
      },

      fullScreen: {
        enable: false,
      },

      fpsLimit: 60,

      particles: {
        number: {
          value: particleDensity,
          density: {
            enable: true,
          },
        },

        color: {
          value: particleColor,
        },

        opacity: {
          value: {
            min: 0.2,
            max: 0.8,
          },
          animation: {
            enable: true,
            speed: 1,
            sync: false,
          },
        },

        size: {
          value: {
            min: minSize,
            max: maxSize,
          },
        },

        move: {
          enable: true,
          speed,
          direction: "none",
          random: true,
          straight: false,
          outModes: {
            default: "out",
          },
        },
      },

      detectRetina: true,
    }),
    [
      background,
      particleDensity,
      particleColor,
      minSize,
      maxSize,
      speed,
    ],
  );

  if (!initialized) {
    return null;
  }

  return (
    <Particles
      id={id}
      className={className}
      options={options}
    />
  );
}