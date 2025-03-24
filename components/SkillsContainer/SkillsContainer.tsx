"use client";
import Image from "next/image";
import React from "react";
import { mySkills } from "@/data/index";
import Marquee from "react-fast-marquee";

export default function SkillsContainer() {
  return (
    <div className="flex flex-none flex-nowrap gap-[30px] h-min overflow-hidden relative w-full p-2">
      <section className="w-full max-w-full flex overflow-hidden justify-between">
        <Marquee className="w-full" autoFill>
          <ul className="flex flex-shrink-0 w-full h-full max-w-full max-h-full items-center p-0 gap-4">
            {mySkills.map((brand, index) => (
              <li
                key={brand.id}
                className={`h-full w-fit ${index === 0 ? "ml-2" : ""} ${
                  index === mySkills.length - 1 ? "mr-2" : ""
                }`}
              >
                <div className="flex items-center justify-center bg-[#121212] text-[#e6e6e6] text-xs font-medium px-4 py-2 rounded-full whitespace-nowrap border border-[#1e1e1e]">
                  {/* Conditionally Render Image or Text */}
                  {brand.icon ? (
                    <Image
                      src={brand.icon}
                      className="h-5 w-5 object-contain mr-2"
                      alt={brand.name}
                      width={20}
                      height={20}
                    />
                  ) : null}
                  {brand.name}
                </div>
              </li>
            ))}
          </ul>
        </Marquee>
      </section>
    </div>
  );
}
