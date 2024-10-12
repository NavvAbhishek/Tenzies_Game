import { useState, useEffect } from "react";

import Dice from "./Dice";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";
import { useWindowSize } from "@react-hook/window-size";

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

const Play = () => {
  const [values, setValues] = useState(allNewDice());
  const [tenzies, setTenzies] = useState(false);

  const holdDice = (id) => {
    setValues((prevVal) =>
      prevVal.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  };

  const rollDice = () => {
    if (!tenzies) {
      setValues((prevVal) =>
        prevVal.map((die) => {
          return die.isHeld ? die : generateNewDie();
        })
      );
    } else {
      setTenzies(false);
      setValues(allNewDice());
    }
  };

  useEffect(() => {
    const allHeld = values.every((val) => val.isHeld);
    const firstDiceVal = values[0].value;

    const checkAllEqual = values.every((val) => firstDiceVal == val.value);

    if (allHeld && checkAllEqual) {
      setTenzies(true);
      console.log("You won!!!");
    } else {
      setTenzies(false);
    }
  }, [values]);
  const [width, height] = useWindowSize();
  return (
   <main className="flex justify-center items-center min-h-full bg-[#0B2434]">
     <div className="flex flex-col items-center justify-center main">
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
        {tenzies ? "New Game" : "Roll Dice"}
      </button>
      {tenzies && <Confetti width={width} height={height} />}
    </div>
   </main>
  );
};

export default Play;
