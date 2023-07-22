import React from 'react';
import {useState, useEffect} from "react";
import './App.css';
import './Styles/customStyles.css'
import TransactionsList from './Components/TransactionsList';
import TransactionForm from './Components/TransactionForm';
import Filter from "./Components/Filter";


function App() {
  const renderDb = 'https://db-starkbanque.onrender.com/transactions'
  const localDb = 'http://localhost:8001/transactions'

  const [transactions, setTransactions] = useState([])
  const [formToggler, setFormToggler] = useState(false)
  const [addTransactionBtnText, setAddTransactionBtnText] = useState("Add a New Transaction")

  function addNewTransaction(newTrans){
    console.log(newTrans);
    fetch(`${renderDb}`, {
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


 function filterBySearch(searchInput){
  console.log(searchInput);
  
  const filteredTransactions = 
  transactions.filter(transaction => transaction.description.toLowerCase().includes(searchInput.toLowerCase()) )
  
  //|| transaction.category.toLowerCase().includes(searchInput.toLowerCase()))

  setTransactions(filteredTransactions)
 }
 
  useEffect(() => {
    fetch(`${renderDb}`)
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

  
  
  return (
    <div className="App">
      <div id='landingPage'>
          <div>
            <h1>Stark-Banque of EastAfrica</h1>
            <h4>
Client Transaction Tracker Application. <br/> Empowering customers to achieve their financial goals and securing their future through personalized banking solutions. Banking at the tip of your fingers</h4>
          </div>
      <button onClick={formTogglerHandler} id="formTogglerButton">{addTransactionBtnText}</button>
      {formToggler ?  <TransactionForm onSubmitTransaction = {addNewTransaction}  /> : null  }  
          <div>
        </div>
      </div>
      <div id='searchfilterContainer'>
        <div>
        <h3>Recent Transactions</h3>
        </div>
        <Filter onSearchFilter={filterBySearch}/>

      </div>
      
      <TransactionsList renderDb={renderDb} setTransactions={setTransactions} transactions={transactions}/>
      <div id="copyrightContainer">
      <p id="copyrightText" style={{ color: 'white', textAlign: 'center' }}>
        &copy;2023 MichelleMwangi All rights reserved.
        </p>  
      </div>
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

