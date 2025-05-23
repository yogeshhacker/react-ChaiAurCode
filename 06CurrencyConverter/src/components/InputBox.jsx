import React , {useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId();
  return (
    <div
      className={`bg-white/80 p-4 rounded-xl shadow flex items-end gap-4 ${className}`}
    >
      <div className="flex-1">
        <label 
        className="block text-blue-700 font-semibold mb-1" 
        htmlFor={amountInputId}
        >
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-gray-100 py-2 px-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-400 transition"
          type="number"
          placeholder="Amount"
          disabled = {amountDisable}
          value={amount}
          onChange={ (e) => onAmountChange && onAmountChange( Number(e.target.value))}
        />
      </div>
      <div className="flex flex-col items-end">
        <label className="text-blue-500 text-xs mb-1">Currency</label>
        <select className="rounded-lg px-3 py-2 bg-blue-50 border border-blue-200 text-blue-700 font-medium cursor-pointer outline-none focus:ring-2 focus:ring-blue-400 transition"
        value={selectCurrency}
        onChange={ (e) => onCurrencyChange && onCurrencyChange( e.target.value)}
        disabled = { currencyDisable }
        >
          {
            currencyOptions.map( (currency) => ( 
              <option value={currency} key={currency}>
                    {currency}
              </option>
            ) ) 
          }
        </select>
      </div>
    </div>
  );
}

export default InputBox;
