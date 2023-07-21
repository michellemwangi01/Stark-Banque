import React from 'react'

const Transaction = ({transaction, onDeleteTransaction}) => {
  let id = transaction.id
  
  const deleteTransactionHandler =()=>{
    onDeleteTransaction(id)
  }

  return (
    <tr key={transaction.id}>
      <td>{transaction.id}</td>
      <td>{transaction.date}</td>
      <td>{transaction.category}</td>
      <td>{transaction.description}</td>
      <td>{transaction.amount}  </td>
      <td onClick={deleteTransactionHandler} id={transaction.id}><i class="fa fa-trash-o" ></i></td>
    </tr>
  )
}

export default Transaction

{/* <i class="fa fa-trash-o" style="font-size:30px;color:white"></i> */}