// src/app/page.tsx
import React from "react";
import { Carousel } from "@/components/Carousel";

const Home: React.FC = () => {
  const slides = [
    <div
      key="1"
      className="flex h-64 items-center justify-center bg-red-500 text-2xl text-white"
    >
      Slide 1
    </div>,
    <div
      key="2"
      className="flex h-64 items-center justify-center bg-blue-500 text-2xl text-white"
    >
      Slide 2
    </div>,
    <div
      key="3"
      className="flex h-64 items-center justify-center bg-green-500 text-2xl text-white"
    >
      Slide 3
    </div>,
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-4 text-2xl font-bold">Carousel Example</h1>
      <Carousel slides={slides} />
    </div>
  );
};

export default Home;
