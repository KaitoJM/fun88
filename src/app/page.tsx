import GamesFilter from "@/components/modules/games/GamesFilter";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { slider_data } from "@/data/slider.data";

export default function Home() {
  return (
    <div>
      <Carousel>
        <CarouselContent>
          {slider_data.map((item) => {
            return (
              <CarouselItem>
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
      <GamesFilter />
    </div>
  );
}
