import { useState } from "react";
import Input from "./components/Input";
import useCurrencyInfo from "./hooks/data";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [covertedAmount, setConvertedAmout] = useState(0);
  return (
    <>
      <Input />
    </>
  );
}

export default App;
