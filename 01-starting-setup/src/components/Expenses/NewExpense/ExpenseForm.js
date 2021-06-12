import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [formType, setformType] = useState(props.formType);

  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  //   Updating elements in a single state

  //   const titleChangeHandler = (event) => {
  //     // setUserInput({...userInput,
  //     //     enteredTitle: event.target.value});
  //     setUserInput((prevState) => {
  //       return { ...prevState, enteredTitle: event.target.value };
  //     });
  //   };
  //   const amountChangeHandler = (event) => {
  //     setUserInput({ ...userInput, enteredAmount: event.target.value });
  //   };
  //   const dateChangeHandler = (event) => {
  //     setUserInput({ ...userInput, enteredDate: event.target.value });
  //   };

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    console.log(enteredTitle);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    console.log(enteredAmount);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("submitted !!!!");

    const eneteredDetails = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    console.log(eneteredDetails);
    props.onSaveExpenseData(eneteredDetails);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    setformType("AddExpenseForm");
  };

  const submitAddExpenseHandler = (event) => { 
    event.preventDefault();
    setformType("");
  }

  const cancelHandler = (event) => {
    event.preventDefault();
    console.log("cancelled !!!!");
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    setformType("AddExpenseForm");
  };

  // return (
  //   <form onSubmit={submitAddExpenseHandler}>
  //     <div className="new-expense__controls">
  //       <div className="new-expense__actions">
  //         <button type="submit">Add New Expense</button>
  //       </div>
  //     </div>
  //   </form>
  // );

  if(formType === "AddExpenseForm") {
    return (
      <form onSubmit={submitAddExpenseHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__actions">
            <button type="submit">Add New Expense</button>
          </div>
        </div>
      </form>
    );
  }
 else {
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input value={enteredAmount}
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>date</label>
          <input value={enteredDate}
            type="date"
            min="2019-01-01"
            max="2021-12-31"
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button onClick={cancelHandler}>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
 }

  
};

export default ExpenseForm;
