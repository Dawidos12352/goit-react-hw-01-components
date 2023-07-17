import React from "react";
import css from "./TransactionHistory.module.css"


const TransactionHistory = ({items}) => {
    return (
<div className={css.box}>
<table className={css.transactionHistory}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
        {items.map(transaction => (
            <TransactionItem key={transaction.id} transaction={transaction}/>
        ))}
  </tbody>
</table>
</div>
    );
};

const TransactionItem = ({transaction}) => {
    const {type, amount, currency} = transaction;

    return (
        <tr>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
    );
};

export default TransactionHistory;