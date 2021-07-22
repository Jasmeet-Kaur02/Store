import { useState, useEffect } from "react";

export const useMediaQuery = (query) => {
  const [match, setMatch] = useState(() => window.matchMedia(query).matches);

  useEffect(() => {
    const queryList = window.matchMedia(query);
    setMatch(queryList.matches);

    const listener = (evt) => setMatch(evt.matches);
    queryList.addEventListener("change", listener);

    return () => {
      queryList.removeEventListener("change", listener);
    };
  }, [query]);

  return match;
};
