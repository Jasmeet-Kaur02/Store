import { useReducer, useEffect, useState } from "react";

function reducer(prevState, action) {
  switch (action.type) {
    case "ADD":
      return [...prevState, action.newItem];

    case "DELETE":
      return prevState.filter((item) => item.id !== action.id);

    case "INCREMENT":
      return prevState.map((item) => {
        if (item.id === action.id) {
          return { ...item, quantity: item.quantity + 1 };
        } else return item;
      });

    case "DECREMENT":
      return prevState.map((item) => {
        if (item.id === action.id && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        } else return item;
      });

    default:
      return prevState;
  }
}

function usePersistedReducer(reducer, initialState, key) {
  const [state, dispatch] = useReducer(reducer, initialState, (initial) => {
    const persisted = localStorage.getItem(key);
    return persisted ? JSON.parse(persisted) : initial;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, dispatch];
}

export function useCart(key = "item") {
  return usePersistedReducer(reducer, [], key);
}

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
