"use client";

import React from "react";
import { Spotlight } from "@/components/ui/spotlight-new";
import { SparklesCore } from "@/components/ui/sparkles";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="relative flex min-h-[42rem] w-full items-center justify-center overflow-hidden bg-black/[0.96] antialiased bg-grid-white/[0.02]">
        {/* Spotlight */}
        <Spotlight />

        {/* Sparkles */}
        <div className="absolute inset-0 z-0">
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={180}
            className="h-full w-full"
            particleColor="#22c55e"
        />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 mx-auto w-full max-w-4xl px-6 text-center">
          <p className="mb-5 text-sm uppercase tracking-[0.4em] text-neutral-500">
            To my Baobei
          </p>

          <h1 className="bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-5xl font-bold text-transparent md:text-7xl lg:text-8xl">
            Happy Monthsary
          </h1>

          <div className="mx-auto mt-8 max-w-xl text-center text-sm leading-7 text-neutral-400 md:text-base md:leading-8">
            <p>
                The future is foggy, with no map to guide us,
                <br />
                no certain road, no promised destination.
            </p>

            <p className="mt-4">
                But I have a compass,
                <br />
                and somehow, it always points to you.
            </p>

            <p className="mt-4 italic text-neutral-500">
                I don&apos;t know what tomorrow holds.
                <br />
                All I have is now.
                All I know is that I love you.
            </p>
            </div>

          <div className="mx-auto mt-12 h-px w-24 bg-white/20" />
        </div>

        {/* Fade at the bottom of the hero */}
        <div className="absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-t from-black to-transparent" />
      </section>

      {/* Letter */}
      <section className="relative z-10 mx-auto max-w-4xl px-6 pb-24">
        <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 shadow-2xl backdrop-blur-sm md:p-12">
          <div className="space-y-7 text-[16px] leading-8 text-neutral-300 md:text-lg md:leading-9">
            <p className="text-xl text-white md:text-2xl">
              Dearest Baobei,
            </p>

            <p>
              I know it has been a while since I last updated the website,
              but I figured now would be a good time to write this to you,
              especially since it&apos;s our monthsary.
            </p>

            <p>
              We&apos;ve gone through a lot in these past two months, and I
              know I&apos;ve made a lot of mistakes along the way. The
              situation we were facing was difficult, and because of that,
              I often became overwhelmed by my thoughts and anxiety. I know
              I can&apos;t control or predict what will happen, but sometimes
              I wish I could. I wish I could know what the future holds, or
              somehow make things easier for us.
            </p>

            <p>
              I&apos;m sorry for everything that has happened and for the
              things I&apos;ve done. I can&apos;t change what happened, but I
              can choose what I do from here. All we can really do now is
              focus on the present and take things one step at a time. And
              for now, all I can do is be here and be present with you.
            </p>

            <p>
              I don&apos;t know what will happen in the future. But what I do
              know right now is that I love you.
            </p>

            <p>
              I know there are reasons why we probably shouldn&apos;t be
              together. I know that being together might make things more
              difficult than they have to be. But Baobei, you&apos;re the
              person I look forward to when I wake up in the morning. I want
              to hear about your day. I want to listen to you rant about
              Ms. Lechon and the freezing AC in the office. I want to stay
              up late with you, talking about our dreams, our ideas, random
              topics, and all the ridiculous fake scenarios we come up with.
            </p>

            <p>
              I want us to be there for each other when things get
              difficult. I want to watch our favorite movies together while
              holding each other&apos;s hands. I want you to be the last
              person I see and talk to every night, and then wake up the
              next morning and do it all over again.
            </p>

            <p>
              You&apos;ve always been there for me, especially on the days
              that felt dark and tiring. You push me to become better every
              day and to keep improving—not only for you, but for myself.
              You support me in the things I want to do and in the person I
              want to become. I hope you know how genuinely amazing I think
              you are.
            </p>

            <p>
              You&apos;re strong, ambitious, intelligent, caring, kind,
              funny, and beautiful. I admire the person you are, and I want
              to be there for every step you take in your life. I know
              you&apos;re going to accomplish so much, and I want to be there
              to see it happen.
            </p>

            <p>
              I don&apos;t know what&apos;s going to happen tomorrow, or the
              day after, or in the weeks and months that follow. I don&apos;t
              know where life will take us or what challenges we&apos;ll have
              to face.
            </p>

            {/* Emotional Moment */}
            <div className="py-10 text-center">
              <p className="text-neutral-500">
                But I do know this:
              </p>

              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white md:text-5xl">
                I love you, Baobei.
              </h2>

              <p className="mt-6 text-sm italic text-neutral-500 md:text-base">
                And maybe, for now, that&apos;s enough.
              </p>
            </div>

            <p>
              Thank you for everything—for loving me, supporting me, putting
              up with me, and for being the amazing girlfriend that you are.
              I&apos;m grateful for every moment we&apos;ve shared, and I&apos;m
              grateful that I get to call you mine.
            </p>

            {/* Signature */}
            <div className="pt-10">
              <p className="text-neutral-400">
                Happy Monthsary, Baobei.
              </p>

              <p className="mt-4 text-xl text-white">
                I love you.
              </p>
            </div>
          </div>
        </article>

      </section>
    </main>
  );
}