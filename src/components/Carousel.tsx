"use client";

import React, { useState, useRef, useEffect } from "react";
import { CarouselSlide } from "./CarouselSlide";
import { CarouselArrow } from "./CarouselArrow";
import { CarouselIndicators } from "./CarouselIndicators";
import { useCarouselSwipe } from "@/hooks/useCarouselSwipe";
import { StaticImageData } from "next/image";

interface CarouselProps {
  slides: {
    url: StaticImageData;
    alt: string;
  }[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export const Carousel: React.FC<CarouselProps> = ({
  slides,
  autoPlay = false,
  autoPlayInterval = 5000,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);

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

  useEffect(() => {
    if (autoPlay) {
      autoPlayTimerRef.current = setInterval(nextSlide, autoPlayInterval);
    }
    return () => {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current);
      }
    };
  }, [autoPlay, autoPlayInterval, currentSlide]);

  return (
    <section
      aria-label="Image Slider"
      className="relative h-full w-full"
      ref={carouselRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseEnter={() => {
        if (autoPlayTimerRef.current) {
          clearInterval(autoPlayTimerRef.current);
        }
      }}
      onMouseLeave={() => {
        if (autoPlay) {
          autoPlayTimerRef.current = setInterval(nextSlide, autoPlayInterval);
        }
      }}
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
