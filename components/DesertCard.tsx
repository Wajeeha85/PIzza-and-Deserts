"use client";
import Image from "next/image";
import React from "react";
import { cn } from "@/lib/utils";

export const Cards = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: any;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
      )}
    >
      <Image
        src={card.src}
        alt={card.title}
        fill
        className="object-cover absolute inset-0"
      />
      <div
        className={cn(
          "absolute inset-0 bg-black/50 flex flex-col justify-end p-4 transition-opacity duration-300",
          hovered === index ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
          {card.title}
        </div>
        <div className="text-sm text-neutral-200 mt-2">{card.description}</div>
        <div className="text-sm text-neutral-200 mt-1">
          Price: ${card.price}
        </div>
        <div className="text-sm text-neutral-200 mt-1">
          Quantity: {card.quantity}
        </div>
      </div>
    </div>
  )
);

Cards.displayName = "Card";
