import React from 'react'
import Transaction from './Transaction'

const TransactionsList = ({transactions}) => {
  const transactionList = transactions.map(transaction => <Transaction key={transaction.id} transaction={transaction}/>)
  return (
    <div className='componentContainer'>
      <h3>Transaction List</h3>
      <table className='table table-responsive table-striped table-dark table table-hover' >
            <thead className='thead-dark'>
                <tr>
                    <td>#</td>
                    <td>Date</td>
                    <td>Category</td>
                    <td>Description</td>
                    <td>Amount</td>
                    <td><i class="fa fa-pencil" ></i></td>

                </tr>
            </thead>
            <tbody>
                {
                transactionList
                }
            </tbody>
        </table>
    </div>
  )
}

export default TransactionsList