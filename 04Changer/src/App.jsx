import { useState } from "react";

function App() {
  const [color, setColor] = useState("Olive");

  return (
    <div className="w-full h-screen flex justify-center" style={{ background: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-2 p-4 shadow-xl bg-white rounded-2xl">
          <button
            style={{ backgroundColor: "olive" }}
            className="hover:brightness-90 text-black font-bold py-2 px-4 rounded"
            onClick={() => setColor("Olive")}
          >
            Olive
          </button>

          <button
            className="bg-red-500 hover:bg-red-700 text-black font-bold py-2 px-4 rounded"
            onClick={() => setColor("Red")}
          >
            Red
          </button>

          <button
            className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded"
            onClick={() => setColor("Blue")}
          >
            Blue
          </button>

          <button
            className="bg-green-500 hover:bg-green-700 text-black font-bold py-2 px-4 rounded"
            onClick={() => setColor("Green")}
          >
            Green
          </button>
          
          <button
            className="bg-pink-500 hover:bg-pink-700 text-black font-bold py-2 px-4 rounded"
            onClick={() => setColor("pink")}
          >
            pink
          </button>
          
          <button
            className="bg-black hover:bg-black-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setColor("black")}
          >
           Black
          </button>
          
          <button
            className="bg-yellow-500 hover:bg-yellow-700 text-black font-bold py-2 px-4 rounded"
            onClick={() => setColor("yellow")}
          >
            Yellow
          </button>

          <button
            className="bg-purple-500 hover:bg-purple-700 text-black font-bold py-2 px-4 rounded"
            onClick={() => setColor("Purple")}
          >
            Purple
          </button>

          <button
            className="bg-orange-500 hover:bg-orange-700 text-black font-bold py-2 px-4 rounded"
            onClick={() => setColor("Orange")}
          >
            Orange
          
          </button>

          <button
            className="bg-teal-500 hover:bg-teal-700 text-black font-bold py-2 px-4 rounded"
            onClick={() => setColor("Teal")}
          >
            Teal
          </button>

          <button
            className="bg-gray-500 hover:bg-gray-700 text-black font-bold py-2 px-4 rounded"
            onClick={() => setColor("Gray")}
          >
            Gray
          </button>

          <button
            className="bg-cyan-500 hover:bg-cyan-700 text-black font-bold py-2 px-4 rounded"
            onClick={() => setColor("Cyan")}
          >
            Cyan
          </button>
          
          <button
            className="bg-indigo-500 hover:bg-indigo-700 text-black font-bold py-2 px-4 rounded"
            onClick={() => setColor("Indigo")}
          >
            Indigo
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
