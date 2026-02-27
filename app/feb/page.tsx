"use client";
import React, { useEffect, useId, useRef, useState } from "react";

import { HeroHighlight, Highlight } from "@/app/components/ui/hero-highlight";
import { motion, AnimatePresence } from "framer-motion";

import Image from "next/image";
import { TextGenerateEffect } from '../components/ui';
import { useOutsideClick } from "../hooks/use-outside-click";


const FebPage = () => {
    const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);
 
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }
 
    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
 
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);
 
  useOutsideClick(
  ref,
  () => setActive(null),
  !!active && typeof active === "object"
);



  return (
    <main className="min-h-screen bg-[#9C9583] text-[#2F3E34]">
      {/* HERO SECTION – SPRING THEME */}
      <HeroHighlight className="flex min-h-screen items-center justify-center px-6 text-center bg-gradient-to-b from-lime-50 to-bg-[#9C9583]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl font-bold sm:text-6xl">
            Happy 2nd Monthsary{" "}
            <Highlight >
              My Love
            </Highlight>
          </h1>

          <TextGenerateEffect
            words={`Whenever I see the smile of thy love,
            My heart takes flight, gentle as a dove.
            Your beauty rivals goddesses of Greece,
            And in your arms, my restless thoughts find peace.

            But when all is said and done,
            I want you to know—I don’t want you gone.
            I want you with me, every day, always,
            The one who sets my heart ablaze.

            In dreams, you are all I think of,
            My light, my heaven high above.
            As the third month draws near and approaches,
            I promise we’ll fare better than Oggy and the cockroaches.`}
            className="mt-6 block text-lg text-emerald-700"
          />


        </motion.div>
      </HeroHighlight>

      {/* Memorable SECTION */}
      <section id="about" className=" min-h-screen bg-[#B0BBBF] text-[#1F2A30] mx-auto max-w-7xl px-17 py-24">
        <h2 className="mb-8 text-3xl font-semibold text-emerald-800">
          My Most Memorable Moment
        </h2>

        <div className="grid items-center gap-1 md:gap-1 md:grid-cols-2">

          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <Image
              src="/2nd_month.jpg"
              alt="Memo_moment"
              fill
              className="rounded-3xl object-cover shadow-md"
              priority
            />
          </div>

          <p className="text-emerald-700">
            My favorite part isn’t something that only happened this month, but that doesn’t make it any less special to me. 
            My favorite part of this month is when you read me stories to help me fall asleep. This small act of yours hits me a lot more than you imagine. 
            You make me feel protected and have shown me a kind of love that is calm and peaceful. It is a love that is not only strong but also very soft and warm. 
            It is the kind that I thought I didn’t deserve yet, and yet I’m so happy and fortunate to have found it within you.

            Thank you, baobei.
          </p>
        </div>
        
      </section>

      {/* MEMORIES SECTION */}
      <section
        id="memories"
        className=" bg-[#A1A499] mx-auto max-w-7xl px-6 py-24"
      >
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-3xl font-semibold text-emerald-800"
        >
          Top songs that remind me of you
        </motion.h2>

        {/* Grid */}
        <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>
 
              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-medium text-neutral-700 dark:text-neutral-200 text-base"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-base"
                    >
                      {active.description}
                    </motion.p>
                  </div>
 
                  <motion.a
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-start gap-4">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col  hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col  w-full">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <img
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-60 w-full  rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="flex justify-center items-center flex-col">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left text-base"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left text-base"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
      </section>

      {/* PROJECTS SECTION */}
      {/* <section id="projects" className="bg-lime-50 py-24" >
        <div className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="mb-12 text-3xl font-semibold text-emerald-800">
            This Month...
          </h2>

          <div className="mx-auto max-w-6xl px-6 py-24">
            <FocusCards cards={cards}  />;
          </div>
          

        </div>
      </section> */}

      {/* CONTACT SECTION */}
      <section id="about" className=" bg-lime-50 mx-auto max-w-7xl px-17 py-24">
        <h2 className="mb-12 text-3xl font-semibold text-emerald-800">
            My letter to you
          </h2>

          <p className="text-emerald-700">
            Dearest Renajia, <br /><br />

          I won’t deny the fact that there are those who disagree with our relationship. I won’t deny that there will be obstacles in our path and that it may take time to get past them. But despite all that, I also can’t ever deny that you are and will always be worth fighting for. I won’t deny the fact that your presence and your love make my mornings very bright and my nights very comforting. The sound of your voice will always play the strings of my heart, and your touch will always remind me that even in the quietest moments, I am never alone.

And so, out of all the things I can’t deny, the biggest and most important truth I can’t deny is this — I’m truthfully, undeniably, unbelievably, insanely, and genuinely in love with you.
          </p>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 text-center">
        <h2 className="mb-6 text-3xl font-semibold text-white">
          I love you Baobei
        </h2>
       
      </section>
    </main>
  )
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};
 
const cards = [
  {
    description: "Daniel Ceasar",
    title: "Best Part",
    src: "/best_dc.png",
    ctaText: "Visit",
    ctaLink: "https://open.spotify.com/track/1Q7EgiMOuwDcB0PJC6AzON?si=8ac8ad34a6974b8f",
    content: () => {
      return (
        <p>
          This song is one way of how I see you in my life. You mean everything to me and I wish to make you feel special everyday.
        </p>
      );
    },
  },
  {
    description: "Imagine Dragons",
    title: "Not Today",
    src: "/not_today.jpg",
    ctaText: "Visit",
    ctaLink: "https://open.spotify.com/track/4kDTvLhGF29gFsqceuxBSC?si=3bc4209bcfa4434f",
    content: () => {
      return (
        <p>
          This song reminds me of the challenges that we are and will be facing in the future.<br></br> 
          It may be difficult and at times painful but, I want you to know that I will be fighting for us <br></br>
           and that I will choose you in every step of the way.
        </p>
      );
    },
  },
 
  {
    description: "Lany",
    title: "ILYSB",
    src: "/ilysb.jpg",
    ctaText: "Visit",
    ctaLink: "https://open.spotify.com/track/3Dkvp3L4w0uJFYfIPa8E9H?si=584f7b47df9d40a5",
    content: () => {
      return (
        <p>
          I love you, baobei, so bad
        </p>
      );
    },
  },
  {
    description: "Ellie Goulding",
    title: "Love me Like You Do",
    src: "/love_me_like_you_do.jpg",
    ctaText: "Visit",
    ctaLink: "https://open.spotify.com/track/3zHq9ouUJQFQRf3cm1rRLu?si=689e1eefea184f59",
    content: () => {
      return (
        <p>
          Aside from the fact you enjoy singing this, I do find the meaning of this song reassemble of what we have <br></br> 
          as we both desire for unconditional affection. Luckily, we are able to find that with each other.
        </p>
      );
    },
  },
];

export default FebPage
