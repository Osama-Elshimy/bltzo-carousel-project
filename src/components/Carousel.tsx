"use client";

import { useCarouselSwipe } from "@/hooks/useCarouselSwipe";
import { StaticImageData } from "next/image";
import React, { useState } from "react";
import { CarouselArrow } from "./CarouselArrow";
import { CarouselIndicators } from "./CarouselIndicators";
import { CarouselSlide } from "./CarouselSlide";

interface CarouselProps {
  slides: {
    url: StaticImageData;
    alt: string;
  }[];
}

export const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const { handleTouchStart, handleTouchMove, handleTouchEnd } =
    useCarouselSwipe({
      onSwipeLeft: () => goToSlide((currentSlide + 1) % slides.length),
      onSwipeRight: () =>
        goToSlide((currentSlide - 1 + slides.length) % slides.length),
    });

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => goToSlide((currentSlide + 1) % slides.length);
  const prevSlide = () =>
    goToSlide((currentSlide - 1 + slides.length) % slides.length);

  return (
    <section
      aria-label="Image Slider"
      className="relative h-full w-full"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <a href="#after-image-slider-controls" className="sr-only">
        Skip Image Slider Controls
      </a>
      <div className="flex h-full w-full overflow-hidden">
        {slides.map(({ url, alt }, index) => (
          <CarouselSlide
            key={index}
            url={url}
            alt={alt}
            isActive={currentSlide === index}
            style={{
              translate: `${-100 * currentSlide}%`,
            }}
          />
        ))}
      </div>
      <CarouselArrow direction="left" onClick={prevSlide} />
      <CarouselArrow direction="right" onClick={nextSlide} />
      <CarouselIndicators
        totalSlides={slides.length}
        currentSlide={currentSlide}
        goToSlide={goToSlide}
      />
      <div id="after-image-slider-controls" />
    </section>
  );
};
