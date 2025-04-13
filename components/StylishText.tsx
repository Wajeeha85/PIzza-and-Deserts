"use client";
import React from "react";
import ColourfulText from "@/components/ui/colourful-text";

export function ColourfulTextDemo() {
  return (
    <div className="flex items-center justify-center ">
      <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-center ml-6 mt-5 text-white font-sans">
        Pizza or <ColourfulText text="Dessert" /> ? Why Not Both? <br />
        Click to <ColourfulText text="Explore" /> Your Next Favorite
        <ColourfulText text="Treat" /> !
      </h1>
    </div>
  );
}
