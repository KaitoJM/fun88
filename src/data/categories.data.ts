import { Categories } from "@/models/Category.types";
import {
  Flame,
  Zap,
  BetweenHorizonalStart,
  CircleUserRound,
  Crown,
  Club,
  Coins,
  LayoutGrid,
} from "lucide-react";

export const category_data: Categories[] = [
  {
    id: 1,
    name: "Start",
    icon: Flame,
  },
  {
    id: 2,
    name: "New",
    icon: Zap,
  },
  {
    id: 3,
    name: "Slot",
    icon: BetweenHorizonalStart,
  },
  {
    id: 4,
    name: "Live",
    icon: CircleUserRound,
  },
  {
    id: 5,
    name: "Jackpots",
    icon: Crown,
  },
  {
    id: 6,
    name: "Table Games",
    icon: Club,
  },
  {
    id: 7,
    name: "Bingo",
    icon: Coins,
  },
  {
    id: 8,
    name: "Others",
    icon: LayoutGrid,
  },
];
