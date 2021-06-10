import React from "react";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expense = [
    { title: "Dress", amount: 2000, date: new Date(2021, 5, 10) },
    { title: "study Table", amount: 7000, date: new Date(2021, 5, 50) },
    { title: "study chair", amount: 7000, date: new Date(2021, 5, 9) },
    { title: "Grocery", amount: 1190, date: new Date(2021, 5, 8) },
  ];

  // Adding code how react transforms JSX code , 
  // it is mandatory import react in older projects in every react component file 
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started!"),
  //   React.createElement(Expenses, { expense: expense })
  // );

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses expense={expense}/>
    </div>
  );
}

export default App;
