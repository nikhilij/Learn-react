import { useState, useEffect } from "react";

export function useLocalStorageState(initalState, key) {
  const [value, setValue] = useState(function () {
    const storedWatched = localStorage.getItem(key);
    return storedWatched ? JSON.parse(storedWatched) : initalState;
  });

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key]
  );

  return [value,setValue];
}
