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
             my favorite memory for this month is when I first had dinner with you at your place. 
             being with you and your family was very fun and lovely. I know Ive said this a couple of times but your mom is really amazing at cooking. 
             being close with you while we sing together felt so warm and homey like I dont know how to properly explain it 
             but I will just say you look very beautiful and its always a fun time with you. 
             I can't wait to see whats next for us in the next chapter of our relationship.

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

            it has been 4 months since we have started this journey together. I personally would say that a lot of things happened this month - 
            I had dinner with your family and did karaoke in your house for the first time, had a lil scare cause something came by later than expected, 
            finally went to have a movie date with you, and many more. 

            looking back at those memories, it does make me think about our relationship so far. what we have is and will 
            continuously be filled with all sorts of experiences, feelings, both good and bad. I can't be certain of whats yet to come but 
            all I know is that I want you beside me on what is yet to come. Happy Monthsary. I love you.

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
