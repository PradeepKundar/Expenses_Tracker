import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  console.log(props);
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    // console.log(selectedYear);
  };

  const FilteredExpenses = props.items.filter((item) => {
    return item.date.getFullYear().toString() === filteredYear;
  });

  // let expenseContent = FilteredExpenses.length === 0 && (
  //   <p>No Expenses Found</p>
  // );
  // if (FilteredExpenses.length > 0) {
  //   expenseContent = FilteredExpenses.map((item) => (
  //     <ExpenseItem
  //       key={item.id}
  //       title={item.title}
  //       amount={item.amount}
  //       date={item.date}
  //     />
  //   ));
  // }

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
          year={FilteredExpenses}
        />
        {/* {FilteredExpenses.length === 0 && <p>No Expenses Found</p>}
        {FilteredExpenses.length > 0 &&
          FilteredExpenses.map((item) => (
            <ExpenseItem
              key={item.id}
              title={item.title}
              amount={item.amount}
              date={item.date}
            />
          ))} */}

        {/* {expenseContent}
         */}
        <ExpensesList items={FilteredExpenses} />
      </Card>
    </li>
  );
};

export default Expenses;
