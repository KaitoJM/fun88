import { Game } from "@/models/Game.types";
import { Star } from "lucide-react";

interface GameListProps {
  data?: Game[];
}

export default function GameList({ data = [] }: GameListProps) {
  return (
    <div className="flex flex-wrap my-4">
      {data.map((item, k) => {
        return (
          <div className="w-1/3 p-1" key={`game-item-${k}`}>
            <div className="border h-full rounded-lg overflow-hidden relative">
              <img src={item.banner} alt="" className="object-cover" />
              <button className="pl-5 pb-4 right-0 top-0 absolute w-[40px] h-[40px] bg-[url('/favorite-mask.svg')] bg-cover bg-no-repeat">
                <Star className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
