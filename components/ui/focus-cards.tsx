"use client";
import React, { useState } from "react";
import { Card } from "../PizzaCard"; // Adjust the import path as needed

type Card = {
  title: string;
  src: string;
  description: string;
  price: number;
  quantity: string;
  sizeandcrust: string;
};

export function FocusCards({ cards }: { cards: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 mb-5 cursor-pointer max-h-6xl  md:grid-cols-3 gap-10 max-w-9xl mx-auto md:px-8 w-full">
      {cards.map((card, index) => (
        <Card
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
