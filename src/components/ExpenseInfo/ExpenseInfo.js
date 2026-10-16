import styles from "./ExpenseInfo.module.css";

export default function ExpenseInfo({ expenses }) {
  const totals = expenses.reduce(
    (result, { amount }) => {
      result.balance += amount;
      if (amount > 0) result.income += amount;
      else result.expense += Math.abs(amount);
      return result;
    },
    { balance: 0, income: 0, expense: 0 },
  );

  return (
    <div className={styles.expenseInfoContainer}>
      <div className={styles.balance}>
        <h4>YOUR BALANCE</h4>
        <h1>${totals.balance}</h1>
      </div>
      <div className={styles.incomeExpenseContainer}>
        <div>
          <h4>Income</h4>
          <p id="money-plus" className={`${styles.money} ${styles.plus}`}>
            +${totals.income}
          </p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" className={`${styles.money} ${styles.minus}`}>
            -${totals.expense}
          </p>
        </div>
      </div>
    </div>
  );
}
