import React from "react";

import "./ExpenseItem.css";
import Card from "../UI/Card";

import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  /*  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("updated!");

    console.log(title);
  }; */
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">Rs.{props.amount}</div>
      </div>
      {/*  <button onClick={clickHandler}>changing</button> */}
    </Card>
  );
};

export default ExpenseItem;
