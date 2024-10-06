import { useState } from "react";
import "./App.css";
import Dice from "./components/Dice";
const allNewDice = () => {
  const diceArray = [];
  for (let index = 0; index < 10; index++) {
    const randomNum = Math.floor(Math.random() * 6) + 1;
    diceArray.push(randomNum);
  }
  return diceArray;
};

const App = () => {
  const [values, setValues] = useState(allNewDice());

  const rollDice = () => setValues(allNewDice());

  return (
    <main className="flex flex-col items-center justify-center h-[25rem] my-[10%] mx-[10%] sm:mx-[15%] md:mx-[25%] lg:mx-[35%] bg-[#F5F5F5] rounded-xl">
      <div className="grid grid-cols-5 gap-4">
        {values.map((value, index) => (
          <div key={index}>
            <Dice value={value} className="box" />
          </div>
        ))}
      </div>
      <button
        onClick={rollDice}
        className="bg-blue-800 p-2 rounded-md text-yellow-400 font-bold text-xl mt-5"
      >
        Roll Dice
      </button>
    </main>
  );
};

export default App;
