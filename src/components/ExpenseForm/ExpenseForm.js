import { useRef, useState } from "react";
import styles from "./ExpenseForm.module.css";

export default function ExpenseForm({ onAddExpense }) {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const textInput = useRef(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    const numericAmount = Number(amount);
    if (!text.trim() || !Number.isFinite(numericAmount) || numericAmount === 0)
      return;
    onAddExpense({ text: text.trim(), amount: numericAmount });
    setText("");
    setAmount("");
    textInput.current?.focus();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h3>Add new transaction</h3>
      <label htmlFor="expenseText">Text</label>
      <input
        ref={textInput}
        id="expenseText"
        className={styles.input}
        type="text"
        placeholder="Enter text..."
        value={text}
        onChange={(event) => setText(event.target.value)}
        required
      />
      <div>
        <label htmlFor="expenseAmount">Amount</label>
        <div>(negative - expense, positive - income)</div>
      </div>
      <input
        className={styles.input}
        id="expenseAmount"
        type="number"
        placeholder="Enter amount..."
        value={amount}
        onChange={(event) => setAmount(event.target.value)}
        required
      />
      <button className={styles.submitBtn} type="submit">
        Add Transaction
      </button>
    </form>
  );
}
