"use client";

import React, { useState, useRef, useEffect } from "react";
import { CarouselSlide } from "./CarouselSlide";
import { CarouselArrow } from "./CarouselArrow";
import { useCarouselSwipe } from "../hooks/useCarouselSwipe";

interface CarouselProps {
  slides: React.ReactNode[];
}

export const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const { handleTouchStart, handleTouchMove, handleTouchEnd } =
    useCarouselSwipe({
      onSwipeLeft: () => setCurrentSlide((prev) => (prev + 1) % slides.length),
      onSwipeRight: () =>
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length),
    });

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        prevSlide();
      } else if (event.key === "ArrowRight") {
        nextSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div
      className="relative overflow-hidden"
      ref={carouselRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="flex transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <CarouselSlide key={index}>{slide}</CarouselSlide>
        ))}
      </div>
      <CarouselArrow direction="left" onClick={prevSlide} />
      <CarouselArrow direction="right" onClick={nextSlide} />
    </div>
  );
};
