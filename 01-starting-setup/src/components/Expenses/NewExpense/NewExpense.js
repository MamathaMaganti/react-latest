import React from "react";
import './NewExpense.css';
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {

    const saveExpenseDataHandler = (eneteredDetails) => {
        const newExpense = {
            id: Math.random(),
            ...eneteredDetails
        }
        console.log("inside New Expense");
        console.log(newExpense);
        props.onAddExpense(newExpense);

    }

  return (
      <div className="new-expense">
          <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
      </div>
  );
};

export default NewExpense;
