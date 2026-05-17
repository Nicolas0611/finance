import { useState } from "react";

export const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = localStorage.getItem(key);

      if (item === null) {
        return initialValue;
      }

      // If initial value is string, return raw value
      if (typeof initialValue === "string") {
        return item as T;
      }

      return JSON.parse(item) as T;
    } catch {
      return initialValue;
    }
  });

  const setValue = (value: T) => {
    try {
      setStoredValue(value);

      if (typeof value === "string") {
        localStorage.setItem(key, value);
      } else {
        localStorage.setItem(key, JSON.stringify(value));
      }
    } catch {
      // ignore write errors
    }
  };

  return [storedValue, setValue] as const;
};
