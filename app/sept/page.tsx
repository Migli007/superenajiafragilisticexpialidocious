"use client";

import React from "react";

const bottles = [
  // Shelf 1
  { h: "h-28", w: "w-8", color: "bg-amber-800", type: "short" },
  { h: "h-36", w: "w-10", color: "bg-red-950", type: "wine" },
  { h: "h-32", w: "w-8", color: "bg-emerald-950", type: "tall" },
  { h: "h-40", w: "w-11", color: "bg-orange-900", type: "wide" },
  { h: "h-30", w: "w-8", color: "bg-yellow-800", type: "short" },
  { h: "h-44", w: "w-10", color: "bg-red-950", type: "wine" },
  { h: "h-34", w: "w-9", color: "bg-amber-900", type: "tall" },
  { h: "h-27", w: "w-8", color: "bg-emerald-950", type: "short" },
  { h: "h-39", w: "w-10", color: "bg-orange-950", type: "wide" },
  { h: "h-31", w: "w-8", color: "bg-red-950", type: "tall" },
  { h: "h-43", w: "w-11", color: "bg-amber-800", type: "wine" },
  { h: "h-29", w: "w-8", color: "bg-emerald-950", type: "short" },
  { h: "h-36", w: "w-9", color: "bg-orange-900", type: "tall" },
  { h: "h-41", w: "w-10", color: "bg-red-950", type: "wide" },
  { h: "h-28", w: "w-8", color: "bg-yellow-800", type: "short" },

  // Shelf 2
  { h: "h-38", w: "w-9", color: "bg-red-950", type: "wine" },
  { h: "h-29", w: "w-8", color: "bg-amber-900", type: "short" },
  { h: "h-43", w: "w-10", color: "bg-emerald-950", type: "tall" },
  { h: "h-32", w: "w-9", color: "bg-orange-950", type: "wide" },
  { h: "h-37", w: "w-8", color: "bg-yellow-800", type: "short" },
  { h: "h-45", w: "w-11", color: "bg-red-950", type: "wine" },
  { h: "h-30", w: "w-8", color: "bg-amber-800", type: "tall" },
  { h: "h-40", w: "w-10", color: "bg-emerald-950", type: "wide" },
  { h: "h-27", w: "w-8", color: "bg-orange-900", type: "short" },
  { h: "h-35", w: "w-9", color: "bg-red-950", type: "wine" },
  { h: "h-42", w: "w-10", color: "bg-amber-900", type: "tall" },
  { h: "h-31", w: "w-8", color: "bg-yellow-800", type: "short" },
  { h: "h-39", w: "w-10", color: "bg-red-950", type: "wide" },
  { h: "h-28", w: "w-8", color: "bg-emerald-950", type: "short" },
  { h: "h-44", w: "w-10", color: "bg-orange-950", type: "wine" },
];

export default function JazzPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0b0604] text-[#f5ead7]">

      {/* ========================================================= */}
      {/* HERO / BACK BAR                                          */}
      {/* ========================================================= */}

      <section className="relative min-h-[100svh] overflow-hidden bg-[#100806]">

        {/* Warm ambient lighting */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_20%,rgba(217,155,69,0.12),transparent_45%),linear-gradient(to_bottom,#180c07,#0b0604)]" />

        <div className="absolute left-1/2 top-0 h-[600px] w-[1000px] -translate-x-1/2 rounded-full bg-amber-500/[0.035] blur-[140px]" />

        {/* ======================================================= */}
        {/* HEADER                                                  */}
        {/* ======================================================= */}

        <div className="relative z-30 px-6 pt-12 text-center sm:pt-16">

          <p className="text-[9px] uppercase tracking-[0.55em] text-amber-200/40 sm:text-[10px]">
            After Hours
          </p>

          <h1 className="mt-3 font-serif text-4xl tracking-wide text-[#f5ead7] sm:text-6xl md:text-7xl">
            Happy Monthsary Baobei
          </h1>

          <p className="mx-auto mt-3 max-w-md font-serif text-sm italic text-[#c8b6a0]/60 sm:text-base">
            Stay for another song.
          </p>

        </div>

        {/* ======================================================= */}
        {/* FULL WIDTH BACK BAR                                     */}
        {/* ======================================================= */}

        <div className="relative z-20 mt-12 w-full sm:mt-16">

          {/* Back wall */}
          <div className="relative h-[390px] w-full overflow-hidden border-y border-[#4b2918] bg-[#180c08] sm:h-[460px]">

            {/* Wood panel texture */}
            <div className="absolute inset-0 opacity-30">

              <div className="absolute inset-y-0 left-[10%] w-px bg-[#59321f]" />
              <div className="absolute inset-y-0 left-[25%] w-px bg-[#59321f]" />
              <div className="absolute inset-y-0 left-[40%] w-px bg-[#59321f]" />
              <div className="absolute inset-y-0 left-[60%] w-px bg-[#59321f]" />
              <div className="absolute inset-y-0 left-[75%] w-px bg-[#59321f]" />
              <div className="absolute inset-y-0 left-[90%] w-px bg-[#59321f]" />

            </div>

            {/* Top decorative molding */}
            <div className="absolute left-0 right-0 top-0 h-3 bg-gradient-to-b from-[#765039] to-[#32180e]" />

            {/* =================================================== */}
            {/* SHELF 1                                              */}
            {/* =================================================== */}

            <div className="absolute left-0 right-0 top-[20%]">

              {/* Warm shelf light */}
              <div className="absolute -top-2 left-[3%] right-[3%] h-4 bg-amber-400/10 blur-xl" />

              <div className="absolute left-[3%] right-[3%] top-0 h-px bg-amber-200/40" />

              {/* Bottles */}
              <div className="flex h-[180px] items-end justify-between gap-1 px-[3%] sm:h-[210px] sm:gap-2 sm:px-[5%]">
                {bottles.slice(0, 15).map((bottle, index) => (
                    <Bottle
                    key={index}
                    {...bottle}
                    interactive={index === 2 || index === 7 || index === 11}
                    />
                ))}
                </div>

              {/* Wooden shelf */}
              <div className="absolute left-[3%] right-[3%] bottom-0 h-4 bg-gradient-to-b from-[#704326] to-[#32170d] shadow-[0_10px_25px_rgba(0,0,0,0.7)]" />

            </div>

            {/* =================================================== */}
            {/* SHELF 2                                              */}
            {/* =================================================== */}

            <div className="absolute bottom-[7%] left-0 right-0">

              {/* Shelf glow */}
              <div className="absolute -top-2 left-[3%] right-[3%] h-5 bg-amber-400/10 blur-xl" />

              <div className="absolute left-[3%] right-[3%] top-0 h-px bg-amber-200/30" />

              <div className="flex h-[155px] items-end justify-between gap-1 px-[3%] sm:h-[185px] sm:gap-2 sm:px-[5%]">
                {bottles.slice(15).map((bottle, index) => (
                    <Bottle
                    key={index}
                    {...bottle}
                    interactive={index === 1 || index === 5 || index === 10}
                    />
                ))}
                </div>

              {/* Wooden shelf */}
              <div className="absolute left-[3%] right-[3%] bottom-0 h-4 bg-gradient-to-b from-[#704326] to-[#32170d] shadow-[0_10px_25px_rgba(0,0,0,0.8)]" />

            </div>

            {/* Hanging glasses */}
            <div className="absolute left-[7%] top-0 hidden sm:block">
              <HangingGlass />
            </div>

            <div className="absolute right-[7%] top-0 hidden sm:block">
              <HangingGlass />
            </div>

            {/* Center sign */}
            <div className="absolute left-1/2 top-[7%] hidden -translate-x-1/2 sm:block">

              <div className="border border-amber-100/10 px-8 py-3">

                <p className="font-serif text-xs uppercase tracking-[0.5em] text-amber-100/30">
                  Midnight
                </p>

              </div>

            </div>

          </div>

          {/* ===================================================== */}
          {/* CLEAN BAR COUNTER                                    */}
          {/* ===================================================== */}

          <div className="relative h-[105px] w-full bg-gradient-to-b from-[#57321e] via-[#321b11] to-[#160b07] sm:h-[125px]">

            {/* Counter top */}
            <div className="absolute -top-4 left-0 right-0 h-5 bg-gradient-to-b from-[#9a6339] via-[#684025] to-[#3b2114] shadow-[0_8px_25px_rgba(0,0,0,0.8)]" />

            {/* Counter highlight */}
            <div className="absolute left-[4%] right-[4%] top-4 h-px bg-amber-100/15" />

            {/* Absolutely clean counter */}
            <div className="absolute inset-0 flex items-center justify-center">

              <p className="font-serif text-[10px] uppercase tracking-[0.5em] text-amber-100/15">
                The Bar
              </p>

            </div>

          </div>

        </div>

        {/* ======================================================= */}
        {/* STOOLS                                                  */}
        {/* ======================================================= */}

        <div className="relative z-30 mx-auto mt-1 flex max-w-5xl justify-around px-[10%] sm:-mt-1">

          {[1, 2, 3, 4].map((stool) => (
            <div
              key={stool}
              className="relative h-44 w-20"
            >

              {/* Seat */}
              <div className="absolute left-1/2 top-0 h-6 w-20 -translate-x-1/2 rounded-[50%] bg-gradient-to-b from-[#71432a] to-[#2b160e] shadow-[0_8px_15px_rgba(0,0,0,0.6)]" />

              {/* Stem */}
              <div className="absolute left-1/2 top-5 h-32 w-2 -translate-x-1/2 bg-gradient-to-r from-[#1b0e09] via-[#69462f] to-[#1b0e09]" />

              {/* Footrest */}
              <div className="absolute left-1/2 top-24 h-1 w-14 -translate-x-1/2 rounded-full bg-[#67442e]" />

              {/* Base */}
              <div className="absolute bottom-2 left-1/2 h-1 w-20 -translate-x-1/2 rounded-full bg-[#1b0e09]" />

            </div>
          ))}

        </div>

        {/* ======================================================= */}
        {/* HERO QUOTE                                             */}
        {/* ======================================================= */}

        <div className="relative z-30 mx-auto max-w-2xl px-6 pb-28 pt-4 text-center">

          <div className="mx-auto mb-7 h-px w-16 bg-amber-300/25" />

          <p className="font-serif text-xl italic leading-relaxed text-[#eadbc7] sm:text-2xl">
            "Here's to the ones who dream, foolish as they may seem."
          </p>

          <p className="mt-6 text-[9px] uppercase tracking-[0.45em] text-amber-200/35">
            Mia, La La Land
          </p>

        </div>

        {/* Bottom fade */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0b0604] to-transparent" />

      </section>

      {/* ========================================================= */}
{/* LETTER */}
{/* ========================================================= */}

<section className="relative bg-[#0b0604] px-6 py-28 sm:py-36">

  {/* Ambient light */}
  <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-amber-700/[0.035] blur-[140px]" />

  <div className="relative mx-auto max-w-3xl">

    {/* Heading */}
    <div className="mb-16 text-center sm:mb-20">

      

      <div className="mx-auto mt-8 h-px w-16 bg-amber-300/25" />

    </div>

    {/* Letter */}
    <article className="border-y border-amber-100/10 py-12 sm:py-16">

      <div className="space-y-8 font-serif text-[16px] leading-[2] text-[#cbbba8] sm:text-lg sm:leading-[2.05]">

        {/* Opening */}
        <div className="mb-12 text-center">

          <p className="text-2xl italic text-[#f5ead7] sm:text-3xl">
            “I love you.”
          </p>

          <p className="mx-auto mt-7 max-w-xl text-[#b9a795]">
            Three simple words,
            <br />
            yet somehow they carry
            <br />
            a million different meanings—
            <br />
            a thousand different ways to say them,
            <br />
            and billions more to show them.
          </p>

        </div>

        <p>
          And as the days go by,
          <br />
          more words are spoken,
          <br />
          more touches are given,
          <br />
          more little moments become memories,
          <br />
          and I find myself wondering—
        </p>

        <div className="py-4 text-center text-[#eadbc7]">
          <p className="italic">
            Do you feel it too?
            <br />
            Do you know how deeply
            <br />
            these words live inside of me?
            <br />
            Are our hearts in sync,
            <br />
            or are there parts of me
            <br />
            you have yet to understand?
          </p>
        </div>

        <p>
          I think about these things
          <br />
          more often than I probably should.
        </p>

        <p>
          You know me.
          <br />
          I overthink.
          <br />
          I worry.
          <br />
          I want everything to be right,
          <br />
          not because I expect perfection,
          <br />
          but because loving you
          <br />
          has made me care about every little thing.
        </p>

        <p>
          And sometimes,
          <br />
          my biggest fear isn&apos;t losing you.
        </p>

        <div className="py-4 text-center">

          <p className="text-xl italic text-[#f5ead7] sm:text-2xl">
            It&apos;s wondering
            <br />
            if you truly know
            <br />
            just how much I love you.
          </p>

        </div>

        <p>
          So let me tell you again.
        </p>

        <p>
          I have storms inside me
          <br />
          that I don&apos;t always know how to explain.
          <br />
          There are days when the world
          <br />
          feels heavier than it should,
          <br />
          when everything on my plate
          <br />
          becomes too much to carry.
        </p>

        <p>
          And when those storms come,
          <br />
          there is one place
          <br />
          my heart wants to go.
        </p>

        <div className="py-6 text-center">

          <p className="font-serif text-4xl italic text-amber-100/90 sm:text-5xl">
            You.
          </p>

        </div>

        <p>
          What amazes me most
          <br />
          is that I don&apos;t always have to ask.
        </p>

        <p className="text-[#f5ead7]">
          You just know.
        </p>

        <p>
          Somehow,
          <br />
          you notice the silence,
          <br />
          the weight behind my words,
          <br />
          the things I leave unsaid.
        </p>

        <p>
          And without being asked,
          <br />
          you become my comfort.
        </p>

        <p>
          You tell me I&apos;m doing well.
          <br />
          You tell me it&apos;ll be alright.
          <br />
          You give me the words
          <br />
          I have spent years
          <br />
          trying to whisper to myself.
        </p>

        <p>
          And sometimes,
          <br />
          when I hear you say them,
          <br />
          I wonder—
        </p>

        <div className="py-5 text-center text-[#eadbc7]">

          <p className="italic">
            Why only now?
            <br />
            Why did it take so long
            <br />
            for someone to hold the pieces
            <br />
            I spent years putting back together alone?
          </p>

        </div>

        <p>
          My younger self
          <br />
          learned how to stand
          <br />
          without anyone reaching out.
        </p>

        <p>
          Learned how to wipe away the dirt,
          <br />
          quiet the storms,
          <br />
          and tell himself
          <br />
          that he would be alright.
        </p>

        <p>
          But then you came.
        </p>

        <p>
          And you didn&apos;t just give me a hand.
        </p>

        <div className="py-4 text-center text-[#eadbc7]">

          <p>
            You gave me a hug.
            <br />
            A kiss.
            <br />
            Your warmth.
            <br />
            Your patience.
            <br />
            Your words.
          </p>

        </div>

        <p>
          You gave me the comfort
          <br />
          I used to give myself
          <br />
          when nobody else was there.
        </p>

        <p>
          And somehow,
          <br />
          the things I once had to tell myself
          <br />
          now come from the woman I love.
        </p>

        {/* Main declaration */}
        <div className="my-14 border-y border-amber-100/10 py-12 text-center sm:my-20 sm:py-16">

          <p className="mb-8 text-[#cbbba8]">
            So if you ever wonder
            <br />
            what you mean to me,
          </p>

          <p className="mb-10 text-xl italic text-[#f5ead7] sm:text-2xl">
            please remember this:
          </p>

          <div className="space-y-5 text-lg leading-relaxed text-[#eadbc7] sm:text-xl">

            <p>
              You are my safe haven
              <br />
              when the world becomes too loud.
            </p>

            <p>
              You are the fire
              <br />
              that keeps me warm
              <br />
              when everything turns cold.
            </p>

            <p>
              You are the light
              <br />
              I look for
              <br />
              when the world goes dark.
            </p>

            <p className="pt-4 font-semibold text-amber-100/90">
              You are my woman.
              <br />
              My darling.
              <br />
              My lover.
              <br />
              My home.
            </p>

          </div>

        </div>

        <p>
          And if someday
          <br />
          you wonder whether I still feel the same,
        </p>

        <p className="text-[#f5ead7]">
          look at me.
        </p>

        <p>
          Because I will still be here,
          <br />
          trying to find new ways
          <br />
          to say what two words
          <br />
          could never fully contain.
        </p>

        {/* Final three lines */}
        <div className="py-14 text-center sm:py-20">

          <div className="space-y-3 font-serif text-3xl italic text-[#f5ead7] sm:text-4xl">

            <p>I see you.</p>

            <p>I feel you.</p>

            <p className="text-amber-100">
              I love you.
            </p>

          </div>

        </div>

        <p className="text-center">
          And I hope
          <br />
          that every word,
          <br />
          every touch,
          <br />
          every moment,
          <br />
          every quiet little thing I do
        </p>

        <div className="py-8 text-center">

          <p className="text-xl italic text-[#eadbc7] sm:text-2xl">
            reminds you—
          </p>

          <p className="mt-8 font-serif text-2xl leading-relaxed text-[#f5ead7] sm:text-3xl">
            you are loved
            <br />
            more deeply
            <br />
            than I will ever know
            <br />
            how to put into words.
          </p>

        </div>

      </div>

    </article>

    {/* Signature */}
    <div className="mt-16 text-center">

      <div className="mx-auto mb-6 h-px w-12 bg-amber-300/20" />

      <p className="font-serif text-sm italic text-amber-100/30">
        For Baobei, always.
      </p>

    </div>

  </div>

</section>

    </main>
  );
}

/* ============================================================= */
/* BOTTLE                                                        */
/* ============================================================= */

function Bottle({
  h,
  w,
  color,
  type,
  interactive = false,
}: {
  h: string;
  w: string;
  color: string;
  type: string;
  interactive?: boolean;
}) {
  const shape =
    type === "wine"
      ? "rounded-t-[45%] rounded-b-md"
      : type === "wide"
        ? "rounded-lg"
        : type === "tall"
          ? "rounded-md"
          : "rounded-md";

  return (
    <div
      className={`group relative flex shrink-0 items-end justify-center ${
        interactive ? "cursor-pointer" : ""
      }`}
    >
      {/* Subtle bottle glow */}
      <div
        className={`absolute bottom-0 h-16 w-10 rounded-full bg-amber-400/[0.05] blur-xl ${
          interactive
            ? "transition-all duration-500 group-hover:bg-amber-300/20"
            : ""
        }`}
      />

      {/* Bottle neck */}
      <div
        className={`absolute -top-7 left-1/2 h-8 w-3 -translate-x-1/2 ${color} ${
          interactive ? "group-hover:brightness-125" : ""
        } sm:h-10 sm:w-3.5`}
      />

      {/* Bottle body */}
      <div
        className={`relative ${h} ${w} ${color} ${shape}
          border border-white/[0.08]
          shadow-[inset_3px_0_8px_rgba(255,255,255,0.06),0_8px_15px_rgba(0,0,0,0.5)]
          ${
            interactive
              ? "transition-all duration-500 group-hover:-translate-y-2 group-hover:brightness-125"
              : ""
          }`}
      >
        {/* Glass highlight */}
        <div className="absolute left-1 top-2 h-[65%] w-px bg-white/[0.12]" />

        {/* Label */}
        <div
          className={`absolute left-1/2 top-1/2 flex h-7 w-[72%] -translate-x-1/2 -translate-y-1/2
            items-center justify-center border border-[#3b2114]/20
            bg-[#ead9bc]/80 text-[4px] uppercase tracking-[0.12em]
            text-[#2b160d]
            ${
              interactive
                ? "transition-colors duration-300 group-hover:bg-[#f5ead7]"
                : ""
            }`}
        >
          JAZZ
        </div>
      </div>
    </div>
  );
}

/* ============================================================= */
/* HANGING GLASS                                                 */
/* ============================================================= */

function HangingGlass() {
  return (
    <div className="relative h-32 w-20">

      <div className="absolute left-1/2 top-0 h-12 w-px bg-[#846047]" />

      <div className="absolute left-1/2 top-10 h-12 w-10 -translate-x-1/2 rounded-b-[50%] border border-[#cbbba8]/35 bg-white/[0.015]" />

      <div className="absolute left-1/2 top-[58px] h-8 w-px bg-[#846047]" />

    </div>
  );
}