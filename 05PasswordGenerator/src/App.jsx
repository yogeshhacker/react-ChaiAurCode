import { useState, useCallback, useEffect } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numbers, setNumbers] = useState(false);
  const [characters, setCharacters] = useState(false);
  const [password, setPassword] = useState("");
  const [copy, setCopy] = useState(false);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnpqrstuvwxyz";

    if (numbers) {
      str += "0123456789";
    }
    if (characters) {
      str += "@()&$#*?/";
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numbers, characters, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [passwordGenerator]);

  return (
    <div className="min-h-screen bg-gradient-to-tr from-black to-blue-900 flex items-center justify-center">
      <div className="w-full max-w-md bg-gray-900 rounded-2xl shadow-2xl p-8 flex flex-col gap-6">
        <h1 className="text-center text-3xl font-extrabold text-amber-400 mb-2 tracking-wide">
          Password Generator
        </h1>
        <div className="flex gap-2">
          <input
            className="flex-1 bg-gray-800 text-center text-xl font-bold text-amber-400 rounded-lg px-4 py-2 outline-none border border-gray-700"
            type="text"
            value={password}
            placeholder="Password"
            readOnly
          />
          <button
            className={`min-w-[100px] bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-150 ${
              copy ? "bg-green-600" : ""
            }`}
            onClick={() => {
              navigator.clipboard.writeText(password);
              setCopy(true);
              setTimeout(() => {
                setCopy(false);
              }, 2000);
            }}
          >
            {copy ? "Copied!" : "Copy"}
          </button>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <label className="text-gray-300 font-medium">Length:</label>
            <input
              type="range"
              min={8}
              max={32}
              value={length}
              className="cursor-pointer accent-blue-500"
              onChange={(e) => setLength(Number(e.target.value))}
            />
            <span className="bg-gray-800 px-3 py-1 rounded text-amber-400 font-bold">
              {length}
            </span>
          </div>
          <div className="flex items-center gap-6">
            <label className="flex items-center gap-2 text-gray-300 font-medium">
              <input
                type="checkbox"
                checked={numbers}
                onChange={() => setNumbers((prev) => !prev)}
                className="accent-blue-500"
              />
              Numbers
            </label>
            <label className="flex items-center gap-2 text-gray-300 font-medium">
              <input
                type="checkbox"
                checked={characters}
                onChange={() => setCharacters((prev) => !prev)}
                className="accent-blue-500"
              />
              Special Chars
            </label>
          </div>
          
        </div>
        <button
            className="w-full bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold py-2 px-4 rounded-lg mt-2 transition-all duration-150"
            onClick={passwordGenerator}
          >
            Generate Password
          </button>
      </div>
    </div>
  );
}

export default App;
