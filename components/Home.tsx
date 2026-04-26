"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MusicPlayer } from "./music";
import {
  anim,
  date,
  envelop,
  forCalendar,
  icons,
  images,
  name,
  rotateTxt,
  txt1,
  txt1Title,
  txt2,
  txt3,
  txt4,
  vazoxTox1,
  vazoxTox2,
} from "@/data/data";
import { motion } from "framer-motion";
import { Program } from "./Program";
import { Footer } from "./footer";
import { Calendar } from "./Calendar";
import { TimeBox } from "./TimeBox";
import AttendanceGuests from "./RSVP";
import { FaRegHeart } from "react-icons/fa";

export function Home() {
  const [openEnvelope, setOpenEnvelope] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (openEnvelope) {
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
  }, [openEnvelope]);

  return (
    <div
      className={`${openEnvelope ? "" : "relative h-screen"} tracking-[20%] text-center overflow-hidden  FontArmHmk text-vrayi `}
    >
      <div
        className={`${openEnvelope ? "animate-bounceYB" : ""} bg-center bg-cover z-51 w-[160vw] h-[160vw] rounded-4xl absolute left-1/2 top-[0%]  -translate-x-1/2 -translate-y-1/2 rotate-45  shadow-2xl `}
        style={{ backgroundImage: `url("${envelop[0]}")` }}
      ></div>
      <div
        className={`${openEnvelope ? "animate-bounceYT" : ""} bg-center bg-cover z-50 w-[160vw] h-[160vw] rounded-4xl absolute left-1/2 -bottom-[50%] -translate-x-1/2 -translate-y-1/2 rotate-45  `}
        style={{ backgroundImage: `url("${envelop[0]}")` }}
      ></div>
      <img
        src={envelop[1]}
        alt="envelop"
        onClick={() => setOpenEnvelope(true)}
        className={`${openEnvelope ? "opacity-0" : ""} transition-all duration-100  absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  cursor-pointer  md:w-50 md:h-50 z-60 w-30 h-30 `}
      />

      {/* music button */}
      <div>
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="fixed z-10 p-1  rounded-2xl bg-[#4a4a4a81]  right-7 top-7 w-15  h-15 flex justify-center items-center"
        >
          <Image
            src={icons[1]}
            alt="icon1"
            width={500}
            height={500}
            className=" w-full p-2 object-contain "
          />
        </button>

        <MusicPlayer isPlaying={isPlaying} />
      </div>

      <div className="m-auto max-w-md ">
        {/* arajin mas */}
        <div className="font-bold ">
          <Image
            src={images[0]}
            alt="icon1"
            width={500}
            height={500}
            className=" object-cover rounded-b-[220px] w-full h-[70dvh]"
          />
          <div className=" my-10  text-vrayi text-5xl ">
            <motion.h2 {...anim} className="-mr-20 ">
              {name[0]}
            </motion.h2>

            <motion.span {...anim} className=" mx-auto ">
              և
            </motion.span>

            <motion.h2 {...anim} className="-ml-20 ">
              {name[1]}
            </motion.h2>
          </div>
        </div>

        {/*vazox tox */}
        <div className=" my-20 relative w-full text-2xl text-[#f1f1f1] py-5 bg-guyn ">
          <div className="FontArmDecorative whitespace-nowrap animate-marquee-2  rotate-2  -translate-x-full">
            {vazoxTox1}
          </div>
          <div className="FontSHK_Dzeragir whitespace-nowrap animate-marquee my-15  -translate-x-full">
            {vazoxTox1}
          </div>
          <div className="FontSHK_Dzeragir whitespace-nowrap animate-marquee-2  -rotate-2 -translate-x-full">
            {vazoxTox1}
          </div>
        </div>

        {/* 2rd mas teqster */}
        <div className=" px-5 mb-20  ">
          <div className=" leading-10">
            <motion.h3 {...anim} className=" font-bold text-sovorakan text-4xl">
              {txt1Title}
            </motion.h3>
            <motion.p {...anim} className=" text-sovorakan  text-2xl mt-10 ">
              {txt1}
            </motion.p>
          </div>
          <h2 className=" text-vrayi text-9xl my-20 flex flex-col ">
            <motion.span {...anim} className="-ml-10">
              {date[0]}
            </motion.span>
            <motion.span {...anim} className="-mr-10 -mt-10">
              {date[1]}
            </motion.span>
            <motion.span {...anim} className="-ml-10 -mt-10">
              {date[2]}
            </motion.span>
          </h2>
        </div>

        {/* iamges */}
        <div className="relative">
          <motion.div {...anim}>
            <Image
              src={images[1]}
              width={500}
              height={500}
              alt="jamanak"
              className="w-[60vw] h-[60vw] ml-10 object-cover"
            />
          </motion.div>
          <motion.div {...anim}>
            <Image
              src={images[2]}
              width={500}
              height={500}
              alt="jamanak"
              className="w-[60vw] h-[60vw] ml-0 mt-10 object-cover"
            />
          </motion.div>

          <motion.h1
            {...anim}
            className="absolute top-1/2 -translate-x-1/2 -right-[90%] *:text-vrayi text-3xl tracking-[50%] rotate-90 "
          >
            {rotateTxt}
          </motion.h1>
        </div>

        {/*vazox tox */}
        <div className=" my-20 relative w-full text-2xl text-[#f1f1f1] py-5 bg-guyn ">
          <div className="FontBraindDoctor whitespace-nowrap animate-marquee-2  rotate-2  -translate-x-full">
            {vazoxTox2}
          </div>
          <div className="FontBraindDoctor whitespace-nowrap animate-marquee my-15  -translate-x-full">
            {vazoxTox2}
          </div>
          <div className="FontBraindDoctor whitespace-nowrap animate-marquee-2  -rotate-2 -translate-x-full">
            {vazoxTox2}
          </div>
        </div>

        <motion.p {...anim} className=" text-2xl  mt-20">
          {txt2}
        </motion.p>

        {/* hethashxvark */}
        <TimeBox />

        <Program />

        <Calendar
          year={forCalendar[0]}
          month={forCalendar[1]}
          highlightDay={forCalendar[2]}
        />

        <motion.p {...anim} className=" text-2xl  mt-20">
          {txt3}
        </motion.p>

        <AttendanceGuests />

        <motion.p {...anim} className=" text-2xl mt-10 ">
          {txt4}
        </motion.p>

        <motion.div {...anim} className="text-7xl mx-auto my-10 w-max">
          <FaRegHeart color="black" />
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
