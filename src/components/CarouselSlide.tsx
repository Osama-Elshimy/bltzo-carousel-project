import React from "react";
import Image, { StaticImageData } from "next/image";

interface CarouselSlideProps {
  url: StaticImageData;
  alt: string;
  isActive: boolean;
  style?: React.CSSProperties;
}

export const CarouselSlide: React.FC<CarouselSlideProps> = ({
  url,
  alt,
  isActive,
  style,
}) => {
  return (
    <Image
      src={url}
      alt={alt}
      aria-hidden={!isActive}
      className="carousel-slide block h-full w-full flex-shrink-0 flex-grow-0 object-cover transition-transform duration-300 ease-in-out"
      style={style}
    />
  );
};
