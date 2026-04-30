"use client";
import React, { useEffect, useId, useRef, useState } from "react";
import { HeroHighlight, Highlight } from "@/app/components/ui/april_hero-highlight";
import { motion } from "framer-motion";
import Image from "next/image";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";

const AprilPage = () => {
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  return (
    <main className="min-h-screen bg-[#f5f2ff] text-[#2c2c2c]">

      {/* HERO SECTION */}
      <HeroHighlight className="flex min-h-screen items-center justify-center px-6 text-center bg-gradient-to-b from-[#f5f2ff] to-[#2c3947]">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
          <h1 className="text-4xl font-bold sm:text-6xl text-[#e8edf2]">
            Happy 4th Monthsary{" "}
            <Highlight >
              BAAAAOOOOBEEEII
            </Highlight>
          </h1>

          <TextGenerateEffect
            words={`When the sun goes down and we’re home once more,
                    the calls we share make distance feel less sore.
                    The movies we watch, the games we play,
                    are moments no universe could ever repay.

                    But what feels most special are the talks we have,
                    the way you make my guarded heart feel safe.
                    Each day I miss you more than words can show,
                    yet these nights with you remind me—I love you so.`}
            className="mt-6 block text-lg text-[#e8edf2]"
          />
        </motion.div>
      </HeroHighlight>

      {/* MEMORABLE SECTION */}
      <section className="bg-[#2c3947] w-full">
        <div className="text-[#e8edf2] mx-auto max-w-7xl px-6 py-16">
          <h2 className="mb-6 text-3xl font-semibold text-[#547a95]">
            My Most Memorable Moment
          </h2>

          <div className="grid items-center gap-4 md:grid-cols-2">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <Image
                src="/april.jpg"
                alt="Memo_moment"
                fill
                className="rounded-3xl object-cover shadow-md"
                priority
              />
            </div>

            <p className="text-[#e8edf2] leading-relaxed">
              My favorite memory this month was when I first had dinner with you at your place. Being with you and your family felt really fun and warm.

              I know I’ve said this before, but your mom is an amazing cook. Everything she made was so good.

              Being close to you while we were singing together felt so comforting and homey—like something I can’t fully explain, but it just felt right.

              And of course, you looked really beautiful. I always have a great time with you.

              I’m excited to see what’s next for us in this next chapter of our relationship.

            </p>
          </div>
        </div>
      </section>

      {/* QUOTE SECTION */}
      <section id="quote" className="bg-[#547a95] w-full py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 text-2xl md:text-3xl font-semibold text-[#e8edf2]"
          >
            "We're all traveling through time together, every day of our lives. All we can do is do our best to relish this remarkable ride."
          </motion.h2>
          <p className="text-[#C2A56D] text-lg md:text-xl font-medium">— About Time</p>
        </div>
      </section>

      {/* LETTER SECTION */}
      <section className="bg-[#e8edf2]/10 w-full py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-3xl font-semibold text-[#547a95]">
            My letter to you
          </h2>

          <p className="text-[#2c2c2c] leading-relaxed">
           Dearest Baobei, <br /><br />

            It’s been 4 months since we started this journey together. I’d say a lot has happened this month alone—having dinner with your family, doing karaoke at your place for the first time, a little scare when something came by later than expected, finally going on a movie date with you, and so much more.

            Looking back at all of these memories makes me think about our relationship so far. What we have, and what we’ll continue to have, will always be a mix of different experiences and emotions—good and bad.

            I can’t be certain of everything that’s ahead, but I do know that I want you beside me through whatever comes next.

            Happy monthsary. I love you.

          </p>
        </div>
      </section>

      {/* FOOTER */}
      <section className="py-24 text-center bg-[#2c3947]">
        <h2 className="text-3xl font-semibold text-[#f5f2ff]">
          我爱你，我的女朋友 ❤️
        </h2>
      </section>
    </main>
  );
};

export default AprilPage;
