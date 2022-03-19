import React, { useState } from "react";

import NewExpense from "./components/newExpense/NewExpense";
import Expenses from "./components/expenses/Expenses";

const initialExpenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e5",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2019, 7, 14),
  },
  { id: "e6", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e7",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2020, 2, 28),
  },
  {
    id: "e8",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2019, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(initialExpenses);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <>
      <NewExpense onaddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </>
  );
};

export default App;
