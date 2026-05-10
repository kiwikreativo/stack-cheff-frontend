"use client";
import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden pb-[200px] pt-[150px]"
    style={{backgroundImage: "url('/src/assets/blurry-gradient-haikei.svg')", backgroundSize: 'cover', backgroundPosition: 'center'}}
    >
      {/* /home/guillermoo/Documents/proyects/stack-cheff-frontend/src/assets/blurry-gradient-haikei.svg */}
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-white dark:text-white">
              Generate Production-Ready  <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Boilerplates in 60 Seconds
              </span>
            </h1>
          </>
        }
      >
        <img
          src={`https://ui.aceternity.com/_next/image?url=%2Flinear.webp&w=3840&q=75`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </ContainerScroll>
    </div>
  );
}