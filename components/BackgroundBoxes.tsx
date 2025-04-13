"use client";
import React from "react";
import { Boxes } from "../components/ui/background-boxes";
import { cn } from "@/lib/utils";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Image from "next/image";
import Link from "next/link";
import { ColourfulTextDemo } from "./StylishText";

export function BackgroundBoxesDemo() {
  return (
    <div className="h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col text-center items-center justify-center">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
        <ColourfulTextDemo />
      </h1>
      <div className="flex flex-row gap-10 ">
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Pizza Section
            </CardItem>

            <CardItem translateZ="100" className="w-full mt-4">
              <Link href="/pizza">
                {" "}
                {/* Add the Link here */}
                <Image
                  src="/pexels-pixabay-315755.jpg"
                  height="1000"
                  width="1000"
                  className="h-80 cursor-pointer w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </Link>
            </CardItem>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Desert Section
            </CardItem>

            <CardItem translateZ="100" className="w-full mt-4">
              <Link href="/deserts">
                <Image
                  src="/pexels-kubra-dogu-80605500-8774282.jpg"
                  height="1000"
                  width="1000"
                  className="h-80 cursor-pointer   w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </Link>
            </CardItem>
          </CardBody>
        </CardContainer>
      </div>
    </div>
  );
}
