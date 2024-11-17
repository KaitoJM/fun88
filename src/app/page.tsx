"use client";
import GamesFilter from "@/components/modules/games/GamesFilter";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { slider_data } from "@/data/slider.data";
import { FilterGame } from "@/models/Game.types";
import { useState } from "react";

export default function Home() {
  const [filters, setFilter] = useState<FilterGame>({
    search: "",
    category_id: 0,
    providers: [],
  });

  function handleFilterChange(filtersEffect: FilterGame) {
    setFilter(filtersEffect);
  }

  return (
    <div>
      <Carousel>
        <CarouselContent>
          {slider_data.map((item, k) => {
            return (
              <CarouselItem key={`slider-${k}`}>
                <img src={item.image} alt="" />
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
      <div className="my-2 flex items-center gap-2">
        <img src="/SVG ICONS/bell-svgrepo-com 1.svg" alt="" />
        <p className="text-main text-sm">
          ¡FELICIDADES artxxxxipa! GANADOR DESTACADO
        </p>
      </div>
      <GamesFilter onFilterChange={handleFilterChange} />
    </div>
  );
}
