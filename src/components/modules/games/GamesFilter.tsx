"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { category_data } from "@/data/categories.data";
import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { provider_data } from "@/data/provider.data";
import { FilterGame } from "@/models/Game.types";

interface ChildComponentProps {
  onFilterChange: (value: FilterGame) => void;
}

const GamesFilter: React.FC<ChildComponentProps> = ({ onFilterChange }) => {
  const [search_open, setSearchOpen] = useState(false);
  const [filters, setFilter] = useState<FilterGame>({
    search: "",
    category_id: 0,
    providers: [],
  });

  function handleSearchToggle() {
    setSearchOpen(!search_open);
  }

  function toggleProvider(id: Number) {
    let selected_providers = [...filters.providers];

    if (filters.providers?.includes(id)) {
      selected_providers = selected_providers.filter(
        (providerId) => providerId !== id
      );
    } else {
      selected_providers.push(id);
    }

    setFilter({ ...filters, providers: selected_providers });
  }

  useEffect(() => {
    onFilterChange(filters);
  }, [filters]);

  return (
    <div className="flex flex-col gap-1 max-w-full overflow-hidden">
      <div className="flex gap-2 items-center">
        <button
          className={
            "border-r pr-2 flex flex-col items-center text-sm " +
            (search_open ? "text-main" : "")
          }
          onClick={handleSearchToggle}
        >
          <Search />
          Search
        </button>
        <div className="flex-1">
          <Carousel className="w-full">
            <CarouselContent className="-ml-1">
              {category_data.map((item, indx) => {
                return (
                  <CarouselItem
                    className="basis-1/8 pl-1"
                    key={indx}
                    onClick={() =>
                      setFilter({ ...filters, category_id: item.id })
                    }
                  >
                    <div
                      className={
                        "flex flex-col items-center border py-1 px-2 rounded-lg " +
                        (filters.category_id == item.id
                          ? "bg-[#00a6ff] text-white"
                          : "")
                      }
                    >
                      <item.icon className="h-4 w-4" />
                      <span className="text-sm min-w-10 text-center">
                        {item.name}
                      </span>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
      {search_open && (
        <div className="flex items-center gap-2 p-1">
          <Input
            placeholder="Search Games"
            value={filters.search}
            onChange={(e) => setFilter({ ...filters, search: e.target.value })}
          />
          <Drawer>
            <DrawerTrigger>
              <Filter />
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle className="text-main">Game Provider</DrawerTitle>
                <DrawerDescription>Filter by Game Provider</DrawerDescription>
              </DrawerHeader>
              <div className="p-4 flex flex-wrap max-h-[400px] overflow-auto">
                {provider_data.map((provider, pindx) => {
                  return (
                    <div
                      className="w-1/2 p-1"
                      key={`provider-${pindx}`}
                      onClick={() => toggleProvider(provider.id)}
                    >
                      <div
                        className={
                          "w-full text-main flex items-center justify-center border rounded-lg px-2 " +
                          (filters.providers.includes(provider.id)
                            ? "bg-[#00a6ff] text-white"
                            : "bg-white")
                        }
                      >
                        <img
                          src={provider.logo}
                          alt=""
                          className="h-[50px] w-auto object-contain"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      )}
    </div>
  );
};

export default GamesFilter;
