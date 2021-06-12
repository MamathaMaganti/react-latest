import React from "react";
import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

const ExpenseFilter = (props) => {

  const  filteredExpensesList = props.filteredExpensesList

let filteredExpenses = <p>No Expenses Found.</p>;
  if (filteredExpensesList.length > 0) {
    filteredExpenses = filteredExpensesList.map((item) => (
      <ExpenseItem
        key={item.id}
        title={item.title}
        amount={item.amount}
        date={item.date}
      />
    ));
  }
  return (<div className="expenses-list">
      {filteredExpenses}
  </div>);
};

export default ExpenseFilter;
