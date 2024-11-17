export type FilterGame = {
  search: string;
  category_id: number;
  providers: number[];
};

export interface Game {
  id: number;
  name: string;
  category_id: number;
  provider_id: number;
  banner: string;
}
