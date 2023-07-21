import {useState, useEffect} from "react";
import './App.css';
import react from 'react';
import './Styles/customStyles.css'
import TransactionsList from './Components/TransactionsList';
import TransactionForm from './Components/TransactionForm';
import Filter from "./Components/Filter";

function App() {

  const [transactions, setTransactions] = useState([])
  const [formToggler, setFormToggler] = useState(false)
  const [addTransactionBtnText, setAddTransactionBtnText] = useState("Add a New Transaction")

  function addNewTransaction(newTrans){
    console.log(newTrans);
    fetch('http://localhost:8001/transactions', {
      method: "POST", 
      headers: {
        'Content-Type': "application/json", 
      },
      body: JSON.stringify(newTrans)
  })
  .then(response => response.json())
  .then(data => setTransactions(()=>[...transactions, {...newTrans, id:data.id}])
  )
  .then(error => console.error("Failed"+ error))
  }

 
 
  useEffect(() => {
    fetch('http://localhost:8001/transactions')
    .then(r => r.json())
    .then(data => {
      //console.log(data)
      setTransactions(data)
    })
  
    return () => {
     
    }
  }, [])



 
 
 
  const formTogglerHandler = () =>  {
  setFormToggler(!formToggler)
  
 }

 useEffect(()=>{
   formToggler ? setAddTransactionBtnText("Close Form") : setAddTransactionBtnText("Add a New Transaction")

 },[formToggler])


  
  //console.log(transactions);
  return (
    <div className="App">
    <h1>Stark-Banque of EastAfrica</h1>
    {/* <Filter/> */}
    <TransactionsList setTransactions={setTransactions} transactions={transactions}/>
    <button onClick={formTogglerHandler} id="formTogglerButton">{addTransactionBtnText}</button>
    {formToggler ?  <TransactionForm onSubmitTransaction = {addNewTransaction}  /> : null  }  
    </div>
  );
}

export default App;

 //const[categories, setTransactionCategories] = useState([])
  // const [distinctCategories, setDistinctCategories] = useState([])
  // let mappedcategories = transactions.map(transaction => transaction.category)

  // const  distinctCategories= categories.filter((item, index, arr) => arr.indexOf(item) === index);
  // console.log(categories);
  //  console.log(distinctCategories); 
  // setTransactionCategories((prev)=>[...prev, mappedcategories]);

