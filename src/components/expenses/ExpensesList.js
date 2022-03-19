import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense, index) => {
        return (
          <li key={`expense_ID_${index}`}>
            <ExpenseItem
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ExpensesList;
