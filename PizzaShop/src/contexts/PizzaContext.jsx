// Context + localStorage logic
// This is our "Digital Pizza Board" + Paper Backup.

import { createContext, useContext, useState, useEffect } from "react";

const PizzaContext = createContext();

export function PizzaProvider({ children }) {
  const [order, setOrder] = useState(() => {
    return localStorage.getItem("PizzaOrder") || "";
  });

  useEffect(() => {
    localStorage.setItem("PizzaOrder", order);
  }, [order]);

  return (
    <PizzaContext.Provider value={{ order, setOrder }}>
      {children}
    </PizzaContext.Provider>
  );
}

export function usePizza() {
  return useContext(PizzaContext);
}
