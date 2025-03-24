import { useEffect, useState } from 'react'
import './App.css'

function CurrencySelect({ onSelectCurrency, selectedCurrency, setSelectedCurrency }) {
  return (
    <select value={selectedCurrency} onChange={(e) => onSelectCurrency(e.target.value, setSelectedCurrency)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
        <option value="JPY">JPY</option>
        <option value="CHF">CHF</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
    </select>
  )
}

function Amount({ onChangeAmount, amount }) {
  return (
    <input type="text" value={amount} onChange={(e) => onChangeAmount(e.target.value)} />
  )
}


function App() {
  const [selectedCurrency1, setSelectedCurrency1] = useState('USD');
  const [selectedCurrency2, setSelectedCurrency2] = useState('EUR');
  const [amount, setAmount] = useState(100);
  const [output, setOutput] = useState("");

  function setSelectCurrency(value, setSelectedCurrency) {
    setSelectedCurrency(value);
  }
  
  function handleAmountChange(value) {
    setAmount(value);
  }

  useEffect(function () {
    async function fetchData() {
      try {
        const response = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${selectedCurrency1}&to=${selectedCurrency2}`);
        const data = await response.json();
        console.log(data);
        setOutput(data.rates[selectedCurrency2]);
      } catch (error) {
        console.log(error);
      }
    }
    if (selectedCurrency1===selectedCurrency2) { setOutput(amount); return }
    fetchData();
  }, [amount, selectedCurrency1, selectedCurrency2, setOutput]
  );

  return (
    <div>
      <Amount onChangeAmount={handleAmountChange} amount={amount}></Amount>
      <CurrencySelect onSelectCurrency={setSelectCurrency}
                      selectedCurrency={selectedCurrency1}
                      setSelectedCurrency={setSelectedCurrency1}></CurrencySelect>
      <CurrencySelect onSelectCurrency={setSelectCurrency} 
                      selectedCurrency={selectedCurrency2}
                      setSelectedCurrency={setSelectedCurrency2}></CurrencySelect>
      {output ? <p>{output}</p> : <p>OUTPUT</p>}
    </div>
  )
}

export default App
