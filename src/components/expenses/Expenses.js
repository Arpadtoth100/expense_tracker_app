import "./Expenses.css";
import Card from "../ui/Card";
import ExpensesFilter from "../expenseFilter/ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setfilteredYear] = useState("2022");
  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear() === Number(filteredYear);
  });
  const filterChangeHandler = (selectedYear) => {
    setfilteredYear(selectedYear);
  };

  return (
    <>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onFilterChange={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </>
  );
};

export default Expenses;
