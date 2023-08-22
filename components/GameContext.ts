import { useContext, createContext } from "react";
import { IGame } from "@/ts_files/interfaces";

export const GameContext = createContext<IGame>({
  words: [],
  tries: 3,
});
