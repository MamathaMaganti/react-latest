import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from './ExpensesList';

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
  // let filteredExpenses = <p>No Expenses Found.</p>;
  // if (filteredExpensesList.length > 0) {
  //   filteredExpenses = filteredExpensesList.map((item) => (
  //     <ExpenseItem
  //       key={item.id}
  //       title={item.title}
  //       amount={item.amount}
  //       date={item.date}
  //     />
  //   ));
  // }

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={year}
          onFilterChange={expenseFilterChangeHandler}
        />
        <ExpensesList filteredExpensesList={filteredExpensesList}/>
        {/* {filteredExpenses} */}
        {/* {filteredExpensesList.length === 0 && <p>No Expenses Found.</p>}
        {filteredExpensesList.length > 0 && filteredExpensesList.map((item) => (
            <ExpenseItem
              key={item.id}
              title={item.title}
              amount={item.amount}
              date={item.date}
            />
          ))
        } */}
        {/* {filteredExpensesList.length === 0 ? (
          <p>No Expenses Found.</p>
        ) : (
          filteredExpensesList.map((item) => (
            <ExpenseItem
              key={item.id}
              title={item.title}
              amount={item.amount}
              date={item.date}
            />
          ))
        )} */}
      </Card>
    </div>
  );
};

export default Expenses;
