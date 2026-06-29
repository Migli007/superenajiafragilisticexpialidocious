"use client";
import React, { useEffect, useId, useRef, useState } from "react";
import { HeroHighlight, Highlight } from "@/app/components/ui/june_hero-highlights";
import { motion } from "framer-motion";
import Image from "next/image";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";

const AprilPage = () => {
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  return (
    <main className="min-h-screen bg-[#BE1A1A] text-[#DAF9DE]">

      {/* HERO SECTION */}
      <HeroHighlight className="flex min-h-screen items-center justify-center px-6 text-center bg-gradient-to-b from-[#BE1A1A] to-[#F7D87F]">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
          <h1 className="text-4xl font-bold sm:text-6xl text-[#F7D87F]">
            Happy 6th Monthsary{" "}
            <Highlight >
              BAAAAOOOOBEEEII
            </Highlight>
          </h1>

          <TextGenerateEffect
            words={`Life with you has always been easy to imagine—
                    golden sunsets painting the shore as we laugh with cocktails in hand,
                    Darling running free in the park, dressed in the little outfit you chose,
                    warm nights by the fireplace, fingers intertwined beneath a cozy blanket,
                    and fearless smiles as we race through rollercoasters together.

                    Yet every dream fades into one quiet moment:
                    you in my arms, your gentle brown eyes meeting mine,
                    and the whole world forgetting how to move.

                    So I don't want imagination anymore.
                    I want your hand in mine, your heart beside mine,
                    to see you, to feel you, to love you—
                    because every beautiful future I can picture
                    has always begun and ended with you.
                    `}
            className="mt-6 block text-lg text-[#000000]"
          />
        </motion.div>
      </HeroHighlight>

      {/* MEMORABLE SECTION */}
      <section className="bg-[#F7D87F] w-full">
        <div className="text-[#080808] mx-auto max-w-7xl px-6 py-16">
          <h2 className="mb-6 text-3xl font-semibold text-[#080808]">
            My Most Memorable Moment
          </h2>

          <div className="grid items-center gap-4 md:grid-cols-2">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <Image
                src="/june.jpg"
                alt="Memo_moment"
                fill
                className="rounded-3xl object-cover shadow-md"
                priority
              />
            </div>

            <p className="text-[#080808] leading-relaxed">
              My favorite moment I had with you this month is when we were having drinks at TGI Fridays. 
              Starting the night with a couple of mojitos after a wonderful time in a museum was a great idea and filling our time with 
              nothing but joy, laughter, and love cant be any more magical than what I planned for. Once again, when I was with you, 
              looking at your Soft and gentle brown eyes, the crowd disappears, the music goes silent. All I could hear, see, and feel is 
              you and as we kissed on the bar area, I hoped for nothing but for time to just stand still for just a moment. 
              I will always remember that day and all the other moments I have spent with you. 


            </p>
          </div>
        </div>
      </section>

      {/* QUOTE SECTION */}
      <section id="quote" className="bg-[#D0311E] w-full py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 text-2xl md:text-3xl font-semibold text-[#fdf8f8]"
          >
            "I can't think of any greater happiness than to be with you all the time, without interruption, endlessly..."
          </motion.h2>
          <p className="text-[#F8EBAB] text-lg md:text-xl font-medium">— Franz Kafka</p>
        </div>
      </section>

      {/* LETTER SECTION */}
      <section className="bg-[#F8EBAB] w-full py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-3xl font-semibold text-[#000000]">
            My letter to you
          </h2>

          <p className="text-[#BE1A1A] leading-relaxed">
            Dearest Baobei, <br /><br />

           It has officially been six months ever since we have started dating and there are still obstacles that we have yet to face, 
           things to work on, and lessons to be learned. but if I have to point out one lesson that I have gained in our time together, 
           it is that I will always come running to you. I would go to you even if distance is far, even if the weather if raining hard or if it burns my skin, 
           even if there is some kind of space between us, or even if we had an argument. 
           I will always come see and find you because you are the best partner that I never thought I could have in this lifetime and I love you. 
           To be honest, I still believe you deserve much more than I am and what I give you. you deserve the entire universe. Nevertheless, 
           I still am forever luck to be loved by an amazing, wonderful, and super beautiful person whose name is Renajia P. Hernandez. Happy Monthsary!

          </p>
        </div>
      </section>

      {/* FOOTER */}
      <section className="py-24 text-center bg-[#BE1A1A]">
        <h2 className="text-3xl font-semibold text-[#fdf9f9]">
          je t'aime tellement
        </h2>
      </section>
    </main>
  );
};

export default AprilPage;
