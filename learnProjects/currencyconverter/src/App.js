import { useState, useEffect } from "react";
import './index.css';
function App() {
  const [amount, setAmount] = useState(1);
  const [fromCurr, setFromCurr] = useState("EUR");
  const [toCurr, setToCurr] = useState("USD");
  const [converted, setConverted] = useState("");
  const [isLoading, setisLoading] = useState(false);

  useEffect(function () {
    if (fromCurr === toCurr) return setConverted(amount);
    if (amount === 0) return setConverted(0);

    const timeoutId = setTimeout(async function getRates() {
      try {
        setisLoading(true);
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurr}&to=${toCurr}`
        );
        if (!res.ok) throw new Error("Error fetching the data");
        const data = await res.json();
        setConverted(data.rates[toCurr]);
      } catch (err) {
        console.error(err);
        setConverted("Error");
      } finally {
        setisLoading(false);
      }
    }, 500); // delay of 500ms to debounce

    return () => clearTimeout(timeoutId);
  }, [amount, fromCurr, toCurr]);

  const handleAmountChange = (e) => {
    const value = Number(e.target.value);
    if (!isNaN(value) && value >= 0) {
      setAmount(value);
    }
  };

  return (
    <>
      <div>
        <input
          type="text"
          value={amount}
          onChange={handleAmountChange}
          disabled={isLoading}
        />
        <select
          value={fromCurr}
          onChange={(e) => setFromCurr(e.target.value)}
          disabled={isLoading}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="CAD">CAD</option>
          <option value="INR">INR</option>
        </select>
        <select
          value={toCurr}
          onChange={(e) => setToCurr(e.target.value)}
          disabled={isLoading}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="CAD">CAD</option>
          <option value="INR">INR</option>
        </select>
        {isLoading ? <p>Loading...</p> : <p>{converted} {toCurr}</p>}
      </div>
    </>
  );
}

export default App;
