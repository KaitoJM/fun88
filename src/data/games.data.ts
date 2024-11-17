import { FilterGame, Game } from "@/models/Game.types";
const ROOT_PATH = "/games/";

const games_data: Game[] = [
  {
    id: 1,
    name: "Anaconda Wild 2",
    provider_id: 14,
    category_id: 5,
    banner: `${ROOT_PATH}anaconda-wild-2.png`,
  },
  {
    id: 2,
    name: "Aztec Bonus Lines",
    provider_id: 9,
    category_id: 5,
    banner: `${ROOT_PATH}aztec-bonus-lines.png`,
  },
  {
    id: 3,
    name: "Beach Life",
    provider_id: 18,
    category_id: 8,
    banner: `${ROOT_PATH}beach-life.png`,
  },
  {
    id: 4,
    name: "Big Bad Wolf",
    provider_id: 2,
    category_id: 8,
    banner: `${ROOT_PATH}big-bad-wolf.png`,
  },
  {
    id: 5,
    name: "Book of Egypt",
    provider_id: 15,
    category_id: 6,
    banner: `${ROOT_PATH}book-of-egypt.png`,
  },
  {
    id: 6,
    name: "Crocodile Blitz Xtreme FB",
    provider_id: 1,
    category_id: 8,
    banner: `${ROOT_PATH}crocodile-blitz-xtreme-fb.png`,
  },
  {
    id: 7,
    name: "Inca Jackpot",
    provider_id: 7,
    category_id: 5,
    banner: `${ROOT_PATH}inca-jackpot.png`,
  },
  {
    id: 8,
    name: "Maya Jackpot",
    provider_id: 5,
    category_id: 5,
    banner: `${ROOT_PATH}maya-jackpot.png`,
  },
  {
    id: 9,
    name: "Pirates Power",
    provider_id: 3,
    category_id: 8,
    banner: `${ROOT_PATH}pirates-power.png`,
  },
  {
    id: 10,
    name: "Shaolin Crew",
    provider_id: 10,
    category_id: 8,
    banner: `${ROOT_PATH}shaolin-crew.png`,
  },
  {
    id: 11,
    name: "Sugar Rush",
    provider_id: 10,
    category_id: 3,
    banner: `${ROOT_PATH}sugar-rush.png`,
  },
  {
    id: 12,
    name: "Pride Of Persia",
    provider_id: 6,
    category_id: 2,
    banner: `${ROOT_PATH}pride-of-persia.png`,
  },
  // Repeated entries with updated IDs
  {
    id: 13,
    name: "Anaconda Wild 2",
    provider_id: 14,
    category_id: 5,
    banner: `${ROOT_PATH}anaconda-wild-2.png`,
  },
  {
    id: 14,
    name: "Aztec Bonus Lines",
    provider_id: 9,
    category_id: 5,
    banner: `${ROOT_PATH}aztec-bonus-lines.png`,
  },
  {
    id: 15,
    name: "Beach Life",
    provider_id: 18,
    category_id: 8,
    banner: `${ROOT_PATH}beach-life.png`,
  },
  {
    id: 16,
    name: "Big Bad Wolf",
    provider_id: 2,
    category_id: 8,
    banner: `${ROOT_PATH}big-bad-wolf.png`,
  },
  {
    id: 17,
    name: "Book of Egypt",
    provider_id: 15,
    category_id: 6,
    banner: `${ROOT_PATH}book-of-egypt.png`,
  },
  {
    id: 18,
    name: "Crocodile Blitz Xtreme FB",
    provider_id: 1,
    category_id: 8,
    banner: `${ROOT_PATH}crocodile-blitz-xtreme-fb.png`,
  },
  {
    id: 19,
    name: "Inca Jackpot",
    provider_id: 7,
    category_id: 5,
    banner: `${ROOT_PATH}inca-jackpot.png`,
  },
  {
    id: 20,
    name: "Maya Jackpot",
    provider_id: 5,
    category_id: 5,
    banner: `${ROOT_PATH}maya-jackpot.png`,
  },
  {
    id: 21,
    name: "Pirates Power",
    provider_id: 3,
    category_id: 8,
    banner: `${ROOT_PATH}pirates-power.png`,
  },
  {
    id: 22,
    name: "Shaolin Crew",
    provider_id: 10,
    category_id: 8,
    banner: `${ROOT_PATH}shaolin-crew.png`,
  },
  {
    id: 23,
    name: "Sugar Rush",
    provider_id: 10,
    category_id: 3,
    banner: `${ROOT_PATH}sugar-rush.png`,
  },
  {
    id: 24,
    name: "Pride Of Persia",
    provider_id: 6,
    category_id: 2,
    banner: `${ROOT_PATH}pride-of-persia.png`,
  },
  {
    id: 25,
    name: "Anaconda Wild 2",
    provider_id: 14,
    category_id: 5,
    banner: `${ROOT_PATH}anaconda-wild-2.png`,
  },
  {
    id: 26,
    name: "Aztec Bonus Lines",
    provider_id: 9,
    category_id: 5,
    banner: `${ROOT_PATH}aztec-bonus-lines.png`,
  },
  {
    id: 27,
    name: "Beach Life",
    provider_id: 18,
    category_id: 8,
    banner: `${ROOT_PATH}beach-life.png`,
  },
  {
    id: 28,
    name: "Big Bad Wolf",
    provider_id: 2,
    category_id: 8,
    banner: `${ROOT_PATH}big-bad-wolf.png`,
  },
  {
    id: 29,
    name: "Book of Egypt",
    provider_id: 15,
    category_id: 6,
    banner: `${ROOT_PATH}book-of-egypt.png`,
  },
  {
    id: 30,
    name: "Crocodile Blitz Xtreme FB",
    provider_id: 1,
    category_id: 8,
    banner: `${ROOT_PATH}crocodile-blitz-xtreme-fb.png`,
  },
  {
    id: 31,
    name: "Inca Jackpot",
    provider_id: 7,
    category_id: 5,
    banner: `${ROOT_PATH}inca-jackpot.png`,
  },
  {
    id: 32,
    name: "Maya Jackpot",
    provider_id: 5,
    category_id: 5,
    banner: `${ROOT_PATH}maya-jackpot.png`,
  },
  {
    id: 33,
    name: "Pirates Power",
    provider_id: 3,
    category_id: 8,
    banner: `${ROOT_PATH}pirates-power.png`,
  },
  {
    id: 34,
    name: "Shaolin Crew",
    provider_id: 10,
    category_id: 8,
    banner: `${ROOT_PATH}shaolin-crew.png`,
  },
  {
    id: 35,
    name: "Sugar Rush",
    provider_id: 10,
    category_id: 3,
    banner: `${ROOT_PATH}sugar-rush.png`,
  },
  {
    id: 36,
    name: "Pride Of Persia",
    provider_id: 6,
    category_id: 2,
    banner: `${ROOT_PATH}pride-of-persia.png`,
  },
  {
    id: 37,
    name: "Anaconda Wild 2",
    provider_id: 14,
    category_id: 5,
    banner: `${ROOT_PATH}anaconda-wild-2.png`,
  },
  {
    id: 38,
    name: "Aztec Bonus Lines",
    provider_id: 9,
    category_id: 5,
    banner: `${ROOT_PATH}aztec-bonus-lines.png`,
  },
  {
    id: 39,
    name: "Beach Life",
    provider_id: 18,
    category_id: 8,
    banner: `${ROOT_PATH}beach-life.png`,
  },
  {
    id: 40,
    name: "Big Bad Wolf",
    provider_id: 2,
    category_id: 8,
    banner: `${ROOT_PATH}big-bad-wolf.png`,
  },
  {
    id: 41,
    name: "Book of Egypt",
    provider_id: 15,
    category_id: 6,
    banner: `${ROOT_PATH}book-of-egypt.png`,
  },
  {
    id: 42,
    name: "Crocodile Blitz Xtreme FB",
    provider_id: 1,
    category_id: 8,
    banner: `${ROOT_PATH}crocodile-blitz-xtreme-fb.png`,
  },
  {
    id: 43,
    name: "Inca Jackpot",
    provider_id: 7,
    category_id: 5,
    banner: `${ROOT_PATH}inca-jackpot.png`,
  },
  {
    id: 44,
    name: "Maya Jackpot",
    provider_id: 5,
    category_id: 5,
    banner: `${ROOT_PATH}maya-jackpot.png`,
  },
  {
    id: 45,
    name: "Pirates Power",
    provider_id: 3,
    category_id: 8,
    banner: `${ROOT_PATH}pirates-power.png`,
  },
  {
    id: 46,
    name: "Shaolin Crew",
    provider_id: 10,
    category_id: 8,
    banner: `${ROOT_PATH}shaolin-crew.png`,
  },
  {
    id: 47,
    name: "Sugar Rush",
    provider_id: 10,
    category_id: 3,
    banner: `${ROOT_PATH}sugar-rush.png`,
  },
  {
    id: 48,
    name: "Pride Of Persia",
    provider_id: 6,
    category_id: 2,
    banner: `${ROOT_PATH}pride-of-persia.png`,
  },
  {
    id: 49,
    name: "Anaconda Wild 2",
    provider_id: 14,
    category_id: 5,
    banner: `${ROOT_PATH}anaconda-wild-2.png`,
  },
  {
    id: 50,
    name: "Aztec Bonus Lines",
    provider_id: 9,
    category_id: 5,
    banner: `${ROOT_PATH}aztec-bonus-lines.png`,
  },
  {
    id: 51,
    name: "Beach Life",
    provider_id: 18,
    category_id: 8,
    banner: `${ROOT_PATH}beach-life.png`,
  },
  {
    id: 52,
    name: "Big Bad Wolf",
    provider_id: 2,
    category_id: 8,
    banner: `${ROOT_PATH}big-bad-wolf.png`,
  },
  {
    id: 53,
    name: "Book of Egypt",
    provider_id: 15,
    category_id: 6,
    banner: `${ROOT_PATH}book-of-egypt.png`,
  },
  {
    id: 54,
    name: "Crocodile Blitz Xtreme FB",
    provider_id: 1,
    category_id: 8,
    banner: `${ROOT_PATH}crocodile-blitz-xtreme-fb.png`,
  },
  {
    id: 55,
    name: "Inca Jackpot",
    provider_id: 7,
    category_id: 5,
    banner: `${ROOT_PATH}inca-jackpot.png`,
  },
  {
    id: 56,
    name: "Maya Jackpot",
    provider_id: 5,
    category_id: 5,
    banner: `${ROOT_PATH}maya-jackpot.png`,
  },
  {
    id: 57,
    name: "Pirates Power",
    provider_id: 3,
    category_id: 8,
    banner: `${ROOT_PATH}pirates-power.png`,
  },
  {
    id: 58,
    name: "Shaolin Crew",
    provider_id: 10,
    category_id: 8,
    banner: `${ROOT_PATH}shaolin-crew.png`,
  },
  {
    id: 59,
    name: "Sugar Rush",
    provider_id: 10,
    category_id: 3,
    banner: `${ROOT_PATH}sugar-rush.png`,
  },
  {
    id: 60,
    name: "Pride Of Persia",
    provider_id: 6,
    category_id: 2,
    banner: `${ROOT_PATH}pride-of-persia.png`,
  },
];

export async function getGamesData(filters: FilterGame): Promise<Game[]> {
  let data = games_data;
  data = data.filter((item) => item.name.includes(filters.search));
  if (filters.category_id) {
    data = data.filter((item) => item.category_id == filters.category_id);
  }
  if (filters.providers.length) {
    data = data.filter((item) => filters.providers.includes(item.provider_id));
  }

  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });

  //   return data;
}
