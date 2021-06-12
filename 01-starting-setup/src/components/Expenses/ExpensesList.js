import React from "react";
import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

const ExpenseFilter = (props) => {

//   const  filteredExpensesList = props.filteredExpensesList
if (props.filteredExpensesList.length === 0) {

    return (<h2 className="expenses-list__fallback">Found no expenses</h2>);
}

// let filteredExpenses = <p>No Expenses Found.</p>;
//   if (props.filteredExpensesList.length > 0) {
//     filteredExpenses = props.filteredExpensesList.map((item) => (
//       <ExpenseItem
//         key={item.id}
//         title={item.title}
//         amount={item.amount}
//         date={item.date}
//       />
//     ));
//   }
  return (<ul className="expenses-list">
      {props.filteredExpensesList.map((item) => (
      <ExpenseItem
        key={item.id}
        title={item.title}
        amount={item.amount}
        date={item.date}
      />
    ))
  }
  </ul>);
};

export default ExpenseFilter;
