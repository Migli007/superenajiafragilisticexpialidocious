"use client";
import React, { useEffect, useId, useRef, useState } from "react";
import { HeroHighlight, Highlight } from "@/app/components/ui/march_hero-highlight";
import { motion } from "framer-motion";
import Image from "next/image";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";

const FebPage = () => {
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  return (
    <main className="min-h-screen bg-[#f5f2ff] text-[#2c2c2c]">

      {/* HERO SECTION */}
      <HeroHighlight className="flex min-h-screen items-center justify-center px-6 text-center bg-gradient-to-b from-[#f5f2ff] to-[#c8a2f8]">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
          <h1 className="text-4xl font-bold sm:text-6xl text-[#2c2c2c]">
            Happy 3rd Monthsary{" "}
            <Highlight >
              My Love
            </Highlight>
          </h1>

          <TextGenerateEffect
            words={`Every breath you take, you make my life full of grace. 
                The way you make me feel, makes me clap like a seal. 
                Nothing's gonna stop us now, I mean they wont even know how. 
                Time after time, you're pretty much who Id pick to do a crime. 
                
                We're in heaven, your presence is like 11:11. 
                Take on me, your mind and body is always tea. 
                Everybody wants to rule the world but when Im with you, its all blurred. 
                Missing you, like seriously, you dont have clue. 
                Against all odds, for you Id fight the gods. 

                Never say goodbye, because you're just gonna make me cry.
                I want to know what love is, so give me more time than this. 
                Im forever yours faithfully, boabei happy monthsary.`}
            className="mt-6 block text-lg text-[#2c2c2c]"
          />
        </motion.div>
      </HeroHighlight>

      {/* MEMORABLE SECTION */}
      <section className="bg-[#c8a2f8] w-full">
        <div className="text-[#2c2c2c] mx-auto max-w-7xl px-6 py-16">
          <h2 className="mb-6 text-3xl font-semibold text-[#a678f0]">
            My Most Memorable Moment
          </h2>

          <div className="grid items-center gap-4 md:grid-cols-2">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <Image
                src="/marchh.jpg"
                alt="Memo_moment"
                fill
                className="rounded-3xl object-cover shadow-md"
                priority
              />
            </div>

            <p className="text-[#2c2c2c] leading-relaxed">
             My favorite memory of us is when we were in Los Baños, dancing in that crowded field. It’s my favorite because it perfectly captures how I see us. Even when the world feels overwhelming—loud, packed, and chaotic—you’re the one who brings me peace. You make everything feel lighter, calmer… like I can just be myself.

            With you, life feels like a dance—something fun, something free, something full of laughter. In the middle of all the noise, it’s you who makes everything feel quiet and right.

            Gosh, you’re amazing… and so full of wonder.

            </p>
          </div>
        </div>
      </section>

      {/* QUOTE SECTION */}
      <section id="quote" className="bg-[#f5f2ff] w-full py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 text-2xl md:text-3xl font-semibold text-[#2c2c2c]"
          >
            "Love isn't just one happy moment, right? It's a million. And it's bickering in the car, and supporting someone when they need it, and it's growing together, and looking after each other."
          </motion.h2>
          <p className="text-[#a678f0] text-lg md:text-xl font-medium">— Joan, Eternity</p>
        </div>
      </section>

      {/* LETTER SECTION */}
      <section className="bg-[#c8a2f8]/10 w-full py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-3xl font-semibold text-[#a678f0]">
            My letter to you
          </h2>

          <p className="text-[#2c2c2c] leading-relaxed">
           Dearest Renajia, <br /><br />

        This marks our third month together, and if I could describe our journey in just three words, it would be: magical, genuine, and sweet.

        Magical—not just because you make me forget everything else when I see you, but because of how alive I feel when I’m with you. I become more talkative, a little poetic, a bit more flirtatious… just full of energy. My anxiety quiets down at the sound of your voice. My heart beats louder with the feeling of your touch. You make me feel like I can conquer the world. You make me feel like I’m the luckiest guy in the universe. But more than anything, you make me feel at home.

        Genuine. It’s something I’ve been searching for, for a long time. And you’re right—words don’t mean much without actions. That’s why I’m so grateful to have found someone who does both effortlessly. You’ve always made me feel loved, especially during the difficult times. I know I can be an idiot sometimes or a bit too much to handle, but please know it’s never my intention. Still, I will always be thankful for everything you do—for me and for us.

        Sweet. Loving you has never felt so easy. Just the thought of you makes me happy. Your presence brings warmth to my heart, and your love sweetens my life—every day, every hour, every second.

        Happy 3rd month, my love. Thank you for choosing me, for staying, and for loving me the way you do. I promise to keep growing, to keep loving you better, and to keep building something beautiful with you.

        I love you—always.

          </p>
        </div>
      </section>

      {/* FOOTER */}
      <section className="py-24 text-center bg-[#a678f0]">
        <h2 className="text-3xl font-semibold text-[#f5f2ff]">
          Mahal Kita
        </h2>
      </section>
    </main>
  );
};

export default FebPage;
