import React from 'react'

const Transaction = ({transaction}) => {
  return (
    <tr key={transaction.id}>
      <td>{transaction.id}</td>
      <td>{transaction.date}</td>
      <td>{transaction.category}</td>
      <td>{transaction.description}</td>
      <td>{transaction.amount}  </td>
      <td><i class="fa fa-trash-o" ></i></td>
    </tr>
  )
}

export default Transaction

{/* <i class="fa fa-trash-o" style="font-size:30px;color:white"></i> */}