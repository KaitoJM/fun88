"use client";
import { Game } from "@/models/Game.types";
import { Star } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

interface GameListProps {
  data?: Game[];
}

export default function GameList({ data = [] }: GameListProps) {
  const [favorites, setFavorites] = useState<Number[]>([]);

  useEffect(() => {
    const favorites_str = localStorage.getItem("game_favorites");
    const favs: Number[] = favorites_str
      ? favorites_str?.split(",").map((item) => parseInt(item))
      : [];
    if (favs) {
      setFavorites(favs);
    }
  }, []);

  useEffect(() => {
    if (favorites.length > 0) {
      localStorage.setItem("game_favorites", favorites.join(","));
    }
  }, [favorites]);

  function toogleFavorites(id: Number) {
    setFavorites((prevFavorites) => {
      const updatedFavorites = [...prevFavorites];
      const index = updatedFavorites.indexOf(id);

      if (index !== -1) {
        updatedFavorites.splice(index, 1);
      } else {
        updatedFavorites.push(id);
      }

      return updatedFavorites;
    });
  }

  return (
    <div className="flex flex-wrap my-4">
      {data.map((item, k) => {
        return (
          <div className="w-1/3 p-1" key={`game-item-${k}`}>
            <div className="border h-full rounded-lg overflow-hidden relative">
              <img src={item.banner} alt="" className="object-cover" />
              <button
                className="pl-5 pb-4 right-0 top-0 absolute w-[40px] h-[40px] bg-[url('/favorite-mask.svg')] bg-cover bg-no-repeat"
                onClick={() => toogleFavorites(item.id)}
              >
                <Star
                  className={
                    `w-4 h-4 ` +
                    (favorites.includes(item.id)
                      ? "text-yellow-500"
                      : "text-white")
                  }
                />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
