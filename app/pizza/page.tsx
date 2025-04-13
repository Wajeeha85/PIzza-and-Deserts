"use client";
import fetchPizza from "@/lib/api";
import React, { useEffect, useState } from "react";
import { FocusCards } from "@/components/ui/focus-cards"; // Adjust the import path as needed

interface Pizza {
  img: string;
  name: string;
  price: number;
  description: string;
  quantity: string;
  sizeandcrust: string;
}

const Pizza = () => {
  const [pizzas, setPizzas] = useState<Pizza[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPizza();
        setPizzas(data);
      } catch (error) {
        console.error("Failed to fetch pizza data:", error);
      }
    };

    fetchData();
  }, []);

  // Map pizza data into the format required by FocusCards
  const cards = pizzas.map((pizza) => ({
    title: pizza.name,
    src: pizza.img,
    description: pizza.description,
    price: pizza.price,
    quantity: pizza.quantity,
    sizeandcrust: pizza.sizeandcrust,
  }));

  return (
    <div>
      {/* Search Input */}
      <div className="flex flex-col justify-center items-center text-center bg-amber-500 ">
        <h1 className="text-4xl m-7 text-yellow-800 font-bold ">Pizza List</h1>
        <FocusCards cards={cards} />
      </div>

      {/* Pizza List Heading */}

      {/* Display Pizza Data in FocusCards */}
    </div>
  );
};

export default Pizza;
