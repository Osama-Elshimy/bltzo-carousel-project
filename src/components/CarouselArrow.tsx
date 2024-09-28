"use client";

import React from "react";

interface CarouselArrowProps {
  direction: "left" | "right";
  onClick: () => void;
}

export const CarouselArrow: React.FC<CarouselArrowProps> = ({
  direction,
  onClick,
}) => {
  const isLeft = direction === "left";
  return (
    <button
      className={`absolute top-1/2 -translate-y-1/2 transform ${
        isLeft ? "left-2" : "right-2"
      } rounded-full bg-white bg-opacity-50 p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
      onClick={onClick}
      aria-label={`${isLeft ? "Previous" : "Next"} slide`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d={isLeft ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}
        />
      </svg>
    </button>
  );
};
