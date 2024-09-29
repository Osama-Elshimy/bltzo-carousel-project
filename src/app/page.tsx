import React from "react";

import { Carousel } from "@/components/Carousel";
import car1 from "@/app/assets/car-1.jpg";
import car2 from "@/app/assets/car-2.jpg";
import car3 from "@/app/assets/car-3.jpg";
import car4 from "@/app/assets/car-4.jpg";
import car5 from "@/app/assets/car-5.jpg";

const IMAGES = [
  { url: car1, alt: "Car One" },
  { url: car2, alt: "Car Two" },
  { url: car3, alt: "Car Three" },
  { url: car4, alt: "Car Four" },
  { url: car5, alt: "Car Five" },
];

const Home: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <Carousel slides={IMAGES} />
    </div>
  );
};

export default Home;
