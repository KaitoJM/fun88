"use client";
import GameList from "@/components/modules/games/GameList";
import GameLoading from "@/components/modules/games/GameLoading";
import GamesFilter from "@/components/modules/games/GamesFilter";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { getGamesData } from "@/data/games.data";
import { slider_data } from "@/data/slider.data";
import { FilterGame, Game } from "@/models/Game.types";
import { useEffect, useState } from "react";

export default function Home() {
  const [filters, setFilter] = useState<FilterGame>({
    search: "",
    category_id: 0,
    providers: [],
  });

  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  function handleFilterChange(filtersEffect: FilterGame) {
    setFilter(filtersEffect);
  }

  useEffect(() => {
    setLoading(true);
    getGamesData(filters).then((data) => {
      setGames(data || []);
      setLoading(false);
    });
  }, [filters]);

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
      {games.length ? (
        loading ? (
          <GameLoading />
        ) : (
          <GameList data={games} />
        )
      ) : (
        ""
      )}
    </div>
  );
}
