"use client";
import fetchDesert from "@/lib/auth";
import React, { useEffect, useState } from "react";
import { FocusCards } from "@/components/ui/focus-cards1"; // Adjust the import path as needed

interface Desert {
  img: string;
  name: string;
  price: number;
  description: string;
  quantity: string;
}

const Desert = () => {
  const [desert, setDesert] = useState<Desert[]>([]);

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const data = await fetchDesert();
        setDesert(data);
      } catch (error) {
        console.error("Failed to fetch deserts data:", error);
      }
    };

    fetchInfo();
  }, []);

  // Map pizza data into the format required by FocusCards
  const cards = desert.map((desert) => ({
    title: desert.name,
    src: desert.img,
    description: desert.description,
    price: desert.price,
    quantity: desert.quantity,
  }));

  return (
    <div>
      <div className="flex flex-col justify-center items-center text-center  bg-yellow-700">
        <h1 className="text-3xl m-7 text-yellow-950  font-bold">
          Dessert List
        </h1>
        <FocusCards cards={cards} />
      </div>
    </div>
  );
};

export default Desert;
