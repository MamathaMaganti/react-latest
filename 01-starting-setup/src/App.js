import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/Expenses/NewExpense/NewExpense";

const expenses = [
  { id: 1, title: "Dress", amount: 2000, date: new Date(2021, 5, 10) },
  { id: 2, title: "study Table", amount: 7000, date: new Date(2021, 5, 50) },
  { id: 3, title: "study chair", amount: 7000, date: new Date(2021, 5, 9) },
  { id: 4, title: "Grocery", amount: 1190, date: new Date(2021, 5, 8) },
];

const App = () => {

  const [expense, setExpense] = useState(expenses);

  // Adding code how react transforms JSX code , 
  // it is mandatory import react in older projects in every react component file 
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started!"),
  //   React.createElement(Expenses, { expense: expense })
  // );

  const addExpenseHandler = (newExpense) => {
      console.log(newExpense);
      setExpense((prevExpense) => {
        return [newExpense, ...prevExpense];
      });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expense}/>
    </div>
  );
}

export default App;
