import React, {useState, useEffect} from 'react'
import Transaction from './Transaction'



const TransactionsList = ({renderDb, transactions, setTransactions}) => {
  
  
  function deleteTransaction(id){
    fetch(`${renderDb}${id}`,{
      method: "DELETE",
    })
    
    const newTransactionList = 
    transactions.filter(transaction => transaction.id != id)
    setTransactions(newTransactionList);
  }

  const transactionList = 
  transactions.map(transaction => <Transaction onDeleteTransaction={deleteTransaction}key={transaction.id} transaction={transaction}/>)
  
  //***********************************COLUMN SORTING******************************************* */
  const [data, setData] = useState([]);
  const [sortClicked, setSortClicked]= useState(false)

  useEffect(() => {
    setData(transactions);
  }, [transactions]);

  //console.log(data);

  const [sortSetting, setSortSetting] = useState(
    {key: null, 
    direction: null})


  const handleSort = (key) => {
    setSortClicked(!sortClicked)
    console.log("clicked:"+ key);
      let direction = 'ascending'
      if (sortSetting.key === key && sortSetting.direction === 'ascending'){
      direction = 'descending'
      }
      console.log(direction);
      //console.log(transactions);

      const sortedData = [...data].sort((a,b)=>{

        if (a[key] < b[key])  {
            console.log(a[key],b[key]);
            return direction === 'ascending' ? -1:1
          }
            
          if (a[key] > b[key]) {
            console.log(key);
            return direction === 'ascending' ? 1:-1
          }
          return 0
      })

      setData(sortedData)
      setSortSetting({key, direction})
      console.log(sortedData);

  }
  useEffect(() => {
    setTransactions(data);
  }, [sortClicked]);



//****************************************************************************** */

  return (
    <div className='componentContainer'>
     
      <table className='table table-responsive table-striped table-dark table table-hover' >
            <thead className='thead-dark'>
                <tr>
                    <td>#</td>
                    <td>Category  
                      <i 
                      onClick={() => handleSort('category')}
                      class="fas fa-sort fa-lg" 
                      style={{color: '#28a745'}}></i></td>
                    <td>Description 
                      <i 
                      onClick={() => handleSort('description')}
                      class="fas fa-sort fa-lg" style={{color: '#28a745'}}></i></td>
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