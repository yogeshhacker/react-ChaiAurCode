import { useState } from "react";
import "./App.css";
import Card from "./Card";

function App() {
  return (
    <>
      <div className="bg-gray-900 h-screen flex justify-center items-center text-white ">
        <Card
          title="Yogesh"
          id="1"
          price="200"
          url="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <Card
          title="Puneet"
          id="2"
          price="300"
          url="https://images.pexels.com/photos/943084/pexels-photo-943084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <Card
          title="Amrit"
          id="3"
          price="100"
          url="https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
      </div>
    </>
  );
}

export default App;
