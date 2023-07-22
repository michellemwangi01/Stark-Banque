import React from 'react'
import Transaction from './Transaction'
import { useState } from 'react'


const TransactionsList = ({transactions, setTransactions}) => {
  const [transactionDeleteID, settransactionDeleteID] = useState(0)
  
  
  function deleteTransaction(id){
    fetch(`http://localhost:8001/transactions/${id}`,{
      method: "DELETE",
    })
    
    const newTransactionList = 
    transactions.filter(transaction => transaction.id != id)
    setTransactions(newTransactionList);
  }

  
 // console.log(transactions);
  const transactionList = 
  transactions.map(transaction => <Transaction onDeleteTransaction={deleteTransaction}key={transaction.id} transaction={transaction}/>)
  
  
  return (
    <div className='componentContainer'>
     
      <table className='table table-responsive table-striped table-dark table table-hover' >
            <thead className='thead-dark'>
                <tr>
                    <td>#</td>
                    <td>Category  <i class="fas fa-sort fa-lg" 
                      style={{color: '#28a745'}}></i></td>
                    <td>Description <i class="fas fa-sort fa-lg" style={{color: '#28a745'}}></i></td>
                    <td>Amount</td>
                      <td>Date</td>
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