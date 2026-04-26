"use client";

import { anim } from "@/data/data";
import { FaRegHeart } from "react-icons/fa";
import { motion } from "framer-motion";

export function Calendar({ year = 2025, month = 9, highlightDay = 8 }) {
  const monthNames = [
    "Հունվար",
    "Փետրվար",
    "Մարտ",
    "Ապրիլ",
    "Մայիս",
    "Հունիս",
    "Հուլիս",
    "Օգոստոս",
    "Սեպտեմբեր",
    "Հոկտեմբեր",
    "Նոյեմբեր",
    "Դեկտեմբեր",
  ];
  const weekDays = ["Կիր","Երկ", "Երք", "Չրք", "Հնգ", "Ուրք", "Շբթ"];

  const firstDay = new Date(year, month - 1, 1).getDay(); // 0=Կիրակի, 1=Երկ
  const daysInMonth = new Date(year, month, 0).getDate();

  const calendarDays = [];
  for (let i = 0; i < firstDay; i++) calendarDays.push(null);
  for (let i = 1; i <= daysInMonth; i++) calendarDays.push(i);

  return (
    <div className="FontArmHmk my-20 p-5 ">
      <div className=" py-10 bg-guyn rounded-[20px] text-center">
        <motion.h2 {...anim} className="text-2xl  font-bold text-[#FFFDFB] tracking-[15%] mb-1">
          {monthNames[month - 1]}
        </motion.h2>
        <motion.p {...anim} className="text-2xl  text-[#FFFDFB] tracking-[10%] font-bold mb-4">{year}</motion.p>

        <div className=" bg-[#FFFDFB] p-2 grid grid-cols-7 mb-2 text-sm font-medium text-vrayi">
          {weekDays.map((day) => (
            <motion.div {...anim} className=" font-bold " key={day}>
              {day}
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-7 font-bold px-5 gap-2 text-base">
          {calendarDays.map((day, idx) =>
            day ? (
              <motion.div {...anim}
                key={idx}
                className={`  py-2 rounded-full ${
                  day === highlightDay
                    ? " text-vra[#FFFDFB] yi text-xl flex items-center justify-center"
                    : "text-[#FFFDFB] "
                }`}
              >
                {day === highlightDay ? <FaRegHeart color="white" /> : day}
              </motion.div>
            ) : (
              <motion.div {...anim} key={idx}></motion.div>
            ),
          )}
        </div>
      </div>
    </div>
  );
}
