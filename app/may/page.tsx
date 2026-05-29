"use client";
import React, { useEffect, useId, useRef, useState } from "react";
import { HeroHighlight, Highlight } from "@/app/components/ui/may_hero-highlights";
import { motion } from "framer-motion";
import Image from "next/image";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";

const AprilPage = () => {
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  return (
    <main className="min-h-screen bg-[#DAF9DE] text-[#DAF9DE]">

      {/* HERO SECTION */}
      <HeroHighlight className="flex min-h-screen items-center justify-center px-6 text-center bg-gradient-to-b from-[#CFECF3] to-[#DAF9DE]">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
          <h1 className="text-4xl font-bold sm:text-6xl text-[#47da78]">
            Happy 5th Monthsary{" "}
            <Highlight >
              BAAAAOOOOBEEEII
            </Highlight>
          </h1>

          <TextGenerateEffect
            words={`I may not be the man you see on silver screens at night,
                    No movie-star charisma or a hero dressed in light.
                    No clever tricks up my sleeve, no perfect windswept hair,
                    No charming little mischief with a flawless model stare.

                    I’m not six-foot-two and stylish in designer shades and shoes,
                    Not the lead in famous boybands singing catchy tunes for you.
                    I’m no magical immortal, no great god from tales above,
                    No extraordinary legend written into books of love.

                    But I can be the one who brings you flowers and your matcha too,
                    On the busiest of mornings just to brighten up your view.
                    I can stay beside your heart through every text and every call,
                    And remind you you’re not lonely whenever shadows start to fall.

                    I can hear you rant for hours ‘bout the humid afternoon,
                    Or the coldness of the midnight underneath a quiet moon.
                    I can cheer the loudest for you no matter where you are,
                    And remind you that you shine brighter than the brightest star.

                    I’ll tell you you are beautiful, smart, resilient, bold,
                    Hot and sexy, full of fire, worth much more than gems or gold.
                    And through every storm life gives you, through the highs and through the low,
                    I can and I will always be your baobei, this you’ll know.
                    `}
            className="mt-6 block text-lg text-[#000000]"
          />
        </motion.div>
      </HeroHighlight>

      {/* MEMORABLE SECTION */}
      <section className="bg-[#DAF9DE] w-full">
        <div className="text-[#080808] mx-auto max-w-7xl px-6 py-16">
          <h2 className="mb-6 text-3xl font-semibold text-[#080808]">
            My Most Memorable Moment
          </h2>

          <div className="grid items-center gap-4 md:grid-cols-2">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <Image
                src="/may.jpg"
                alt="Memo_moment"
                fill
                className="rounded-3xl object-cover shadow-md"
                priority
              />
            </div>

            <p className="text-[#080808] leading-relaxed">
              My favorite memory of us this month is last night. Sure our talk isn't something new but it was still deeply meaningful to me. 
              every moment we have gone through together isn't something I could ever trade for. 
              I have said that the reason why I confessed to you earlier than expected is because I didn't want to waste a single moment and until, that stays true. 
              I do want to have many adventures with you, make more silly jokes, maybe ragebait you a bit more (probably not a good idea), and spend more endless nights together. 
              No matter how small or big these days go by, nothing would have been any better unless you were by my side. I dont know what else to say to this but thank you. 
              Thank you for always being there for me, for keeping me warm on the cold days, and comforting me in the storms I sail to. 
              You are an amazing and beautiful woman I am lucky to be with you.


            </p>
          </div>
        </div>
      </section>

      {/* QUOTE SECTION */}
      <section id="quote" className="bg-[#F6FFDC] w-full py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 text-2xl md:text-3xl font-semibold text-[#030303]"
          >
            "Love looks not with the eyes, but with the mind, And therefore is winged Cupid painted blind."
          </motion.h2>
          <p className="text-[#F9B2D7] text-lg md:text-xl font-medium">— A Midsummer Night's Dream, William Shakespeare</p>
        </div>
      </section>

      {/* LETTER SECTION */}
      <section className="bg-[#CFECF3] w-full py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-3xl font-semibold text-[#547a95]">
            My letter to you
          </h2>

          <p className="text-[#2c2c2c] leading-relaxed">
           Dearest Baobei, <br /><br />

            You were right-these months have gone pretty fast and this month, you are in the last of your teen years. 
            I know that some fears and other emotions are mixing in you but do know this and I have said this before - you are amazing. 
            Im not only saying you are amazing because of your achievements although they are more than ordinary. 
            you are amazing because you always push thru life with everything you got and still be kind, courageous, and graceful. 
            thats something not a lot of people can do unfortunately. you are strong, steadfast, and determined. 
            you can do all these kinds of things and still look like the most beautiful angel the world has to offer. 
            And so what Im trying to say is keep being you - the lovely, funny, smart, charming beautiful woman you are. 
            Happy Monthsary Baobei. Happy Birthday. I love you. 

          </p>
        </div>
      </section>

      {/* FOOTER */}
      <section className="py-24 text-center bg-[#F9B2D7]">
        <h2 className="text-3xl font-semibold text-[#000000]">
          사랑해, 나의 하나뿐인 사람아
        </h2>
      </section>
    </main>
  );
};

export default AprilPage;
