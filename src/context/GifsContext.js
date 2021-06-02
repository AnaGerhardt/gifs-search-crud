import { createContext, useContext } from "react";

export const GifsContext = createContext(undefined);

export function useGifs() {
  const gifs = useContext(GifsContext);
  return gifs;
}
