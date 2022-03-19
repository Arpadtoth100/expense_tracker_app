import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onaddExpense(expenseData);
  };
  let [formVisible, toggleFormVisible] = useState(false);

  const toggleHandler = () => {
    toggleFormVisible((prev) => !prev);
  };
  return (
    <div className="new-expense">
      {!formVisible && (
        <button type="button" onClick={toggleHandler}>
          Add New Expense
        </button>
      )}
      {formVisible && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          toggle={toggleHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
