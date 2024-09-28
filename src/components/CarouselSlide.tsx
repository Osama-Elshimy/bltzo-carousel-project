"use client";

import React from "react";

interface CarouselSlideProps {
  children: React.ReactNode;
}

export const CarouselSlide: React.FC<CarouselSlideProps> = ({ children }) => {
  return <div className="w-full flex-shrink-0">{children}</div>;
};
