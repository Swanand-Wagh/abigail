"use client";
import { AvatarMe, handGif } from "@/app/assets/assets";
import Image from "next/image";
import React from "react";
import { Mail, Calendar } from "lucide-react";
import Button from "../ui/Button";

import { motion } from "framer-motion";
import AnimatedImageGrid from "../ui/AnimatedImageGrid";
import CounterContainer from "../CounterContainer/CounterContainer";
// import ScheduleButton from "../ui/ScheduleButton";

export default function Hero() {
  return (
    <div className="flex flex-none flex-col flex-nowrap gap-[30px] h-min justify-start overflow-visible p-0 relative w-full ">
      {/* top  */}
      <section className="flex flex-col lg:flex-row items-center flex-none flex-nowrap gap-[20px] h-min justify-start overflow-visible p-0 relative w-full">
        {/* Image centered on mobile */}
        <div className="flex items-center justify-center w-full md:items-center flex-none flex-nowrap flex-col gap-[10px] h-min p-0 relative md:w-min overflow-hidden">
          <div className="aspect-auto flex-none h-auto w-[260px] relative bg-image-bg rounded-lg">
            <figure className="h-full w-full">
              <Image
                src={AvatarMe}
                alt="Avatar"
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
              <AnimatedImageGrid image={AvatarMe} />
            </figure>
          </div>
        </div>

        {/* Text and buttons */}
        <div className="flex flex-col items-center sm:items-start gap-2 p-0 relative w-full h-auto">
          <div className="flex flex-col gap-1 text-center sm:text-left">
            {/* "Hello, I'm" centered on mobile */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                type: "spring",
                stiffness: 100,
                delay: 0.1,
              }}
              viewport={{ once: true }}
              className="flex items-center justify-center sm:justify-start gap-1"
            >
              <span>
                <Image
                  src={handGif}
                  className="waveHand"
                  alt="Hand Gesture"
                  width={25}
                  height={25}
                />
              </span>
              <p className="text-light-gray-2 font-bold leading-[1.2em] text-[20px]">
                Hello, I&apos;m
              </p>
            </motion.div>

            {/* Name centered on mobile */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                type: "spring",
                stiffness: 100,
                delay: 0.2,
              }}
              viewport={{ once: true }}
              className="text-4xl leading-[1.2em] font-bold text-white text-center sm:text-left"
            >
              Abigail Grace Houtari
            </motion.h1>
          </div>

          {/* Intro centered on mobile */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              type: "spring",
              stiffness: 100,
              delay: 0.3,
            }}
            viewport={{ once: true }}
            className="text-[18px] text-light-gray-2 font-medium leading-[150%] mb-4 text-center sm:text-left"
          >
            Mechanical Engineering student at the University of Washington,
            passionate about applying my skills to impactful engineering
            projects. Let&apos;s have a discussion about how we can work
            together.
          </motion.p>

          {/* Buttons stacked on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              type: "spring",
              stiffness: 100,
              delay: 0.4,
            }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center sm:items-start flex-none flex-nowrap w-full gap-3 sm:gap-5 h-min justify-start p-0 relative"
          >
            <Button
              onClick={() =>
                window.open(
                  "https://mail.google.com/mail/?view=cm&fs=1&to=houtariabigail@gmail.com",
                  "_blank"
                )
              }
              position="left"
              icon={<Mail size={18} />}
              title="Email Me"
            />
            <Button
              position="left"
              icon={<Calendar size={18} />}
              title="Schedule Call"
              onClick={() => window.open("", "_blank")}
            />
          </motion.div>
        </div>
      </section>

      {/* middle  */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
          type: "spring",
          stiffness: 100,
          delay: 0.6,
        }}
        viewport={{ once: true }}
      >
        {/* bottom  */}
        <CounterContainer />
      </motion.div>
    </div>
  );
}
