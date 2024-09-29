import React from "react";

interface CarouselIndicatorsProps {
  totalSlides: number;
  currentSlide: number;
  goToSlide: (index: number) => void;
}

export const CarouselIndicators: React.FC<CarouselIndicatorsProps> = ({
  totalSlides,
  currentSlide,
  goToSlide,
}) => {
  return (
    <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <button
          key={index}
          className={`@ hover:scale-120 focus-visible:scale-120 focus-visible:outline-auto h-4 w-4 cursor-pointer transition-transform duration-100 ease-in-out ${index === currentSlide ? "bg-white" : "bg-white/50"} `}
          aria-label={`View Image ${index + 1}`}
          onClick={() => goToSlide(index)}
        >
          <span className="sr-only">{`Slide ${index + 1}`}</span>
        </button>
      ))}
    </div>
  );
};
