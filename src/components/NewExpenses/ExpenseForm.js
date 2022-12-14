import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  /* const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmout: "",
    enteredDate: "",
  }); */

  const titleChangeHandler = (e) => {
    // console.log(e.target.value);
    setEnteredTitle(e.target.value);

    /* setUserInput({
      ...userInput,
      enteredTitle: e.target.value,
    }); */
    /* 
    //Its better to use a function when we are dealing with the previous values

    setUserInput((prevState)=>{
    return {...prevState, enteredTitle:e.target.value}
  });
 */
  };
  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
    /* setUserInput({
      ...userInput,
      enteredAmout: e.target.value,
    }) */
  };

  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
    /* setUserInput({
      ...userInput,
      enteredDate: e.target.value,
    }) */
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    // console.log(expenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amout</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
