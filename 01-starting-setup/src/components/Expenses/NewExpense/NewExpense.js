import React, { useState } from "react";
import './NewExpense.css';
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (eneteredDetails) => {
        const newExpense = {
            id: Math.random(),
            ...eneteredDetails
        }
        console.log("inside New Expense");
        console.log(newExpense);
        props.onAddExpense(newExpense);

    }

    const startEditingHandler = () => {
        setIsEditing(true);
    }

    const stopEditingHandler = () => {
        setIsEditing(false);
    }


  return (
      <div className="new-expense">
          {!isEditing && <button type="submit" onClick={startEditingHandler}>Add New Expense</button>}
          {isEditing && <ExpenseForm onCancel={stopEditingHandler} onSaveExpenseData={saveExpenseDataHandler}/>}
      </div>
  );
};

export default NewExpense;
