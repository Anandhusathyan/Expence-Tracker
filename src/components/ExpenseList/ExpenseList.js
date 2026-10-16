import styles from "./ExpenseList.module.css";
import Transaction from "../Transaction/Transaction";

export default function ExpenseList({
  expenses,
  onUpdateExpense,
  onDeleteExpense,
}) {
  return (
    <div className={styles.expenseListContainer}>
      <h3>Transactions</h3>
      <ul className={styles.transactionList}>
        {expenses.map((expense) => (
          <Transaction
            key={expense.id}
            expense={expense}
            onUpdateExpense={onUpdateExpense}
            onDeleteExpense={onDeleteExpense}
          />
        ))}
      </ul>
    </div>
  );
}
