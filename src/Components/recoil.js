import { atom, selector } from "recoil";

export const movieState = atom({
  key: "movieList", //unique key
  default: [], // default value or initial state
});
