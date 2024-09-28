"use client";

import { useState } from "react";

interface UseCarouselSwipeProps {
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
}

export const useCarouselSwipe = ({
  onSwipeLeft,
  onSwipeRight,
}: UseCarouselSwipeProps) => {
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const minSwipeDistance = 50;

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      onSwipeLeft();
    }
    if (isRightSwipe) {
      onSwipeRight();
    }
  };

  return {
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  };
};
