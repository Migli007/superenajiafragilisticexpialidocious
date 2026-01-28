"use client";

import { HeroHighlight, Highlight } from "@/app/components/ui/hero-highlight";
import { motion } from "framer-motion";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";
import { TextGenerateEffect } from "./components/ui";
import Image from "next/image";
import { FocusCards } from "@/components/ui/focus-cards";


const images = [
  "/m1.jpg",
  "/m2.jpg",
  "/m3.jpg",
  "/m4.jpg",
  "/m6.jpeg",
  "/m7.jpg",
  "/m8.jpeg",
  "/m9.jpeg",
  "/m10.jpeg",
  "/m11.jpg",
  "/m12.jpeg",
  "/m13.jpg",
  "/m14.jpg",
  "/m15.jpg",
  "/m16.jpeg",
  "/m5.jpg"

];

const cards = [
    {
      title: "Forest Adventure",
      src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Valley of life",
      src: "https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Sala behta hi jayega",
      src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Camping is for pros",
      src: "https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "The road not taken",
      src: "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "The First Rule",
      src: "https://assets.aceternity.com/the-first-rule.png",
    },
  ];


export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-emerald-50 text-emerald-900">
      {/* HERO SECTION – SPRING THEME */}
      <HeroHighlight className="flex min-h-screen items-center justify-center px-6 text-center bg-gradient-to-b from-lime-50 to-emerald-100">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl font-bold sm:text-6xl">
            Hi, I’m{" "}
            <Highlight >
              Miguel Li
            </Highlight>
          </h1>

          <TextGenerateEffect
            words={`Day by day, I've had these thoughts.
              All the magic she has brought.
              Like my birthday in August,
              Warm and bright, just what I sought.

              Broke my scales by eleven,
              Crazy paths my heart has driven.
              Last Christmas Eve, I waited,
              For you — this love is G-rated.

              Like a young rabbit in spring,
              In Orange County, hopping.
              I chase the warmth you bring,
              Lost in you — no stopping.`}
            className="mt-6 block text-lg text-emerald-700"
          />


        </motion.div>
      </HeroHighlight>

      {/* Memorable SECTION */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="mb-8 text-3xl font-semibold text-emerald-800">
          My Most Memorable Moment
        </h2>

        <div className="grid items-center gap-1 md:gap-1 md:grid-cols-2">

          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <Image
              src="/memorable_lb.jpg"
              alt="Memo_moment"
              fill
              className="rounded-3xl object-cover shadow-md"
              priority
            />
          </div>

          <p className="text-emerald-700">
            My most memorable moment of this month is our long field trip. 
            Although initially it was supppsed to be for your NSTP group project, things shifted more to us and our relationship. 
            Despite the heat, the walking, and the jeepney rides, nothing felt uncomfortable to me because I had you by my side. 
            Lets of course not forget the three words you have said to me a couple of times when we were in starbucks. 
            When I finally heard these words coming out of your mouth, I thought couldnt get any luckier than this but then minutes after that, you proved me wrong. 
            I cant wait for the next trips we will have together in the future.
          </p>
        </div>
        
        
      </section>

      {/* MEMORIES SECTION */}
      <section
        id="memories"
        className="mx-auto max-w-6xl px-6 py-24"
      >
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-3xl font-semibold text-emerald-800"
        >
          Our Memories
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[160px] gap-2 md:gap-3">
          
          {/* Big anchor image */}
          <AnimatedImage
            src={images[0]}
            className="col-span-2 row-span-2"
          />
          

          {/* Tall */}
          <AnimatedImage
            src={images[1]}
            className="row-span-2"
          />
          <AnimatedImage
            src={images[15]}
            className="row-span-2"
          />

          {/* Normal */}
          <AnimatedImage src={images[2]} />
          


          <AnimatedImage
            src={images[4]}
            className="row-span-2"
          />

          

          {/* Another tall */}
          <AnimatedImage
            src={images[5]}
            className="row-span-2"
          />

          <AnimatedImage src={images[3]} />
          {/* Remaining images */}
          {images.slice(6).map((src, i) => (
            <AnimatedImage key={i} src={src} />
          ))}

          
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="bg-lime-50 py-24" >
        <div className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="mb-12 text-3xl font-semibold text-emerald-800">
            This Month...
          </h2>

          <div className="mx-auto max-w-6xl px-6 py-24">
            <FocusCards cards={cards}  />;
          </div>
          

        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="mb-12 text-3xl font-semibold text-emerald-800">
            A Letter to You
          </h2>

          <p className="text-emerald-700">
            Dearest Renee, <br /><br />

            I dont understand the physics behind it but in every moment I spend with you, time seems to speed up and slow down at the same time. 
            Time speeds up everytime we are together but, it slows down as I gaze upon you, looking into your eyes, giving me that pretty smile on your face, 
            hearing your cute laugh everytime something silly happens.  
            As I think about this, im reminded of the quote from the film " when Harry met Sally" - when you realize you want to spend the rest of your life with somebody, 
            you want the rest of your life to start as soon as possible. 
            The greatest realization I have when Im with you is when were laughing off our mistake as we got off another jeepney stop than we intended. 
            From that specific moment alone, I knew for certain that life with you would always be amazing and beautiful. 
            You truly have made me look at the world in a much more colorful and vibrant view. You always make sure I feel so loved and and safe.  
            Till now, Im still trying to figure how much I deserve to be with such an angel but I know for a fact that I am willing to look for those answers.
          </p>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 text-center">
        <h2 className="mb-6 text-3xl font-semibold text-emerald-800">
          Happy Monthsary Baobei
        </h2>
       
      </section>
    </main>
  );
}


function AnimatedImage({
  src,
  className = "",
}: {
  src: string;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`relative h-full min-h-[160px] overflow-hidden rounded-2xl ${className}`}
    >
      <Image
        src={src}
        alt="Memory"
        fill
        sizes="(min-width: 768px) 25vw, 50vw"
        className="object-cover transition-transform duration-500 hover:scale-105"
      />
    </motion.div>
  );
}
