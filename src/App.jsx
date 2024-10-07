import { useState } from "react";
import "./App.css";
import Dice from "./components/Dice";
import { nanoid } from "nanoid";

const generateNewDie = () => {
  const randomNum = Math.floor(Math.random() * 6) + 1;
  return { value: randomNum, isHeld: false, id: nanoid() };
};

const allNewDice = () => {
  const diceArray = [];

  for (let index = 0; index < 10; index++) {
    diceArray.push(generateNewDie());
  }
  console.log(diceArray);
  return diceArray;
};

const App = () => {
  const [values, setValues] = useState(allNewDice());

  const holdDice = (id) => {
    setValues((prevVal) =>
      prevVal.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  };

  const rollDice = () => {
    setValues((prevVal) =>
      prevVal.map((die) => {
        return die.isHeld ? die : generateNewDie();
      })
    );
  };

  return (
    <main className="flex flex-col items-center justify-center main">
      <div className="flex flex-col items-center justify-center mb-6">
        <h1 className="text-4xl font-bold text-yellow-700">Tenzies</h1>
        <p className="w-[21rem] font-semibold mt-2">
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
      </div>
      <div className="grid grid-cols-5 gap-4">
        {values.map((value) => (
          <div key={value.id}>
            <Dice
              value={value.value}
              holdDice={() => holdDice(value.id)}
              className={`box ${
                value.isHeld === true ? "bg-yellow-700" : "bg-white"
              }`}
            />
          </div>
        ))}
      </div>
      <button
        onClick={rollDice}
        className="bg-blue-900 p-2 rounded-md text-yellow-400 font-bold text-xl mt-5"
      >
        Roll Dice
      </button>
    </main>
  );
};

export default App;
