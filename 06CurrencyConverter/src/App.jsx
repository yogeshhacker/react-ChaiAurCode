import { useState, useCallback, useEffect } from "react";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
function App() {
  const [amount, setAmount] = useState("");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount)
    setConvertedAmount(amount)
    
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  }

 
  return (
    <>
      <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 via-purple-300 to-pink-200">
        <div className="w-full max-w-md mx-auto rounded-2xl shadow-2xl p-8 backdrop-blur-lg bg-white/40 border border-white/30">
          <h1 className="text-3xl font-bold text-center text-blue-700 mb-6 drop-shadow">
            Currency Converter
          </h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert()
            }}
          >
            <div className="w-full mb-3">
              <InputBox label="From" 
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={ setFrom }
                selectCurrency={from}
                onAmountChange={ setAmount }
              />
            </div>
            <div className="relative w-full flex items-center justify-center my-4">
              <span className="h-px w-full bg-gradient-to-r from-transparent via-blue-400 to-transparent absolute left-0 top-1/2 -translate-y-1/2"></span>
              <button
                type="button"
                className="z-10 flex items-center gap-2 border-2 border-white shadow-lg rounded-full bg-blue-600 hover:bg-blue-700 transition text-white px-4 py-2 text-sm font-semibold"
                onClick={swap}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
                Swap
              </button>
            </div>
            <div className="w-full mb-6">
              <InputBox label="To" 
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={ setTo }
                selectCurrency={to}
                amountDisable
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-500 hover:from-blue-700 hover:to-purple-600 text-white px-4 py-3 rounded-xl font-bold shadow-lg transition"
            >
              Convert {from.toUpperCase() } to { to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
