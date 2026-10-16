import "./App.css";
import { useRef, useState } from "react";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseInfo from "./components/ExpenseInfo/ExpenseInfo";
import ExpenseList from "./components/ExpenseList/ExpenseList";

export default function App() {
  const [expenses, setExpenses] = useState([]);
  const nextId = useRef(0);
  const addExpense = (expense) =>
    setExpenses((items) => [...items, { ...expense, id: ++nextId.current }]);
  const updateExpense = (id, changes) =>
    setExpenses((items) =>
      items.map((item) => (item.id === id ? { ...item, ...changes } : item)),
    );
  const deleteExpense = (id) =>
    setExpenses((items) => items.filter((item) => item.id !== id));
  console.log("expenses",expenses);

  return (
    <>
      <h2 className="mainHeading">Expense Tracker</h2>
      <div className="App">
        <ExpenseForm onAddExpense={addExpense} />
        <div className="expenseContainer">
          <ExpenseInfo expenses={expenses} />
          <ExpenseList
            expenses={expenses}
            onUpdateExpense={updateExpense}
            onDeleteExpense={deleteExpense}
          />
        </div>
      </div>
    </>
  );
}
