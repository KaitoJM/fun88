export type FilterGame = {
  search: string;
  category_id: Number;
  providers: Number[];
};

export interface Game {
  id: Number;
  name: string;
  category_id: Number;
  provider_id: Number;
  banner: string;
}
