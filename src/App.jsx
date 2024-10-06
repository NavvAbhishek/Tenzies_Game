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

  return (
    <main className="flex items-center justify-center h-[25rem] my-[10%] mx-[10%] sm:mx-[15%] md:mx-[25%] lg:mx-[35%] bg-[#F5F5F5]">
      <h1 className="grid grid-cols-5 gap-4">
        {values.map((value, index) => (
          <div key={index}>
            <Dice value={value} className="box" />
          </div>
        ))}
      </h1>
    </main>
  );
};

export default App;
