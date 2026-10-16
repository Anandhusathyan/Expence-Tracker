import { useState } from "react";
import styles from "./Transaction.module.css";
import EditImage from "../../images/edit.png";
import DeleteImage from "../../images/trash-bin.png";

export default function Transaction({
  expense,
  onUpdateExpense,
  onDeleteExpense,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const editExpense = () => {
    const text = window.prompt("Transaction text", expense.text);
    if (text === null || !text.trim()) return;
    const amount = window.prompt("Transaction amount", expense.amount);
    if (
      amount === null ||
      !Number.isFinite(Number(amount)) ||
      Number(amount) === 0
    )
      return;
    onUpdateExpense(expense.id, { text: text.trim(), amount: Number(amount) });
  };
  return (
    <li
      className={`${styles.transaction} ${expense.amount > 0 ? styles.profit : styles.loss}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div>{expense.text}</div>
      <div className={styles.transactionOptions}>
        <div className={`${styles.amount} ${isHovered && styles.movePrice}`}>
          ${expense.amount}
        </div>
        <div className={`${styles.btnContainer} ${isHovered && styles.active}`}>
          <button
            className={styles.edit}
            type="button"
            onClick={editExpense}
            aria-label={`Edit ${expense.text}`}
          >
            <img src={EditImage} height="100%" alt="Edit" />
          </button>
          <button
            className={styles.delete}
            type="button"
            onClick={() => onDeleteExpense(expense.id)}
            aria-label={`Delete ${expense.text}`}
          >
            <img src={DeleteImage} height="100%" alt="Delete" />
          </button>
        </div>
      </div>
    </li>
  );
}
