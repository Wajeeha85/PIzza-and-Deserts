"use client";
import React, { useState } from "react";
import { Cards } from "../DesertCard"; // Adjust the import path as needed

type Card = {
  title: string;
  src: string;
  description: string;
  price: number;
  quantity: string;
};

export function FocusCards({ cards }: { cards: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1  cursor-pointer md:grid-cols-3 gap-10 max-w-5xl mx-auto mb-4 md:px-8 w-full">
      {cards.map((card, index) => (
        <Cards
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
