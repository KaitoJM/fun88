import { atom } from "recoil";

type Filter = {
  search: string;
  category_id: Number;
  providers: Number[];
};

export const filterState = atom<Filter>({
  key: "filterState",
  default: {
    search: "",
    category_id: 0,
    providers: [],
  },
});

// export const searchKeyState = selector({
//   key: "searchKeyState",
//   get: ({ get }) => {
//     const filter = get(filterState);
//     return filter.search;
//   },
// });
