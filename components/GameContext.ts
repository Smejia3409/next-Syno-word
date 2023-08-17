import { useContext, createContext } from "react";
import { IGame } from "./interfaces";

export const GameContext = createContext<IGame>({
  words: [],
  tries: 3,
});
