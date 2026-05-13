"use client";
import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";

export function HeroScroll() {
  return (
    <div className="flex flex-col overflow-hidden pb-[80px] sm:pb-[250px] pt-[100px] sm:pt-[150px]"
    style={{backgroundImage: "url('/src/assets/blurry-gradient-haikei.svg')", backgroundSize: 'cover', backgroundPosition: 'center'}}
    >
      {/* /home/guillermoo/Documents/proyects/stack-cheff-frontend/src/assets/blurry-gradient-haikei.svg */}
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white dark:text-white px-2">
              Generate Production-Ready  <br />
              <span className="text-3xl sm:text-4xl md:text-[4rem] lg:text-[6rem] font-bold mt-1 leading-none">
                Boilerplates in 60 Seconds
              </span>
            </h1>
          </>
        }
      >
        <img
          src={`/src/assets/image-hero.png`}
          alt="hero"
          height={750}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </ContainerScroll>
    </div>
  );
}