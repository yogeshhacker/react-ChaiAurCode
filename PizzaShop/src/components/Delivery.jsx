// Reads the order
import React from "react";
import { usePizza } from "../contexts/PizzaContext";

function Delivery() {
  const { order } = usePizza();

  return (
    <div>
      <h3>Delivery Team</h3>
      <p>Delivering: {order || "No order yet"}</p>
    </div>
  );
}

export default Delivery;
