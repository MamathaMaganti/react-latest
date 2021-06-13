import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [year, setYear] = useState("2020");

  const expenseFilterChangeHandler = (year) => {
    console.log("in Expenses");
    console.log(year);
    setYear(year);
    console.log(props.items);
  };

  const filteredExpensesList = props.items.filter(
    (item) => item.date.getFullYear().toString() === year
  );
  console.log("filteredList");
  console.log(filteredExpensesList);

  return (
    <li>
      <Card className="expenses">
        <ExpenseFilter
          selected={year}
          onFilterChange={expenseFilterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpensesList}/>
        <ExpensesList filteredExpensesList={filteredExpensesList}/>
      </Card>
    </li>
  );
};

export default Expenses;
