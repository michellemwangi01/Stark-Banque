import React, { useState } from 'react'

const TransactionForm = ({onSubmitTransaction}) => {

    const [newTransactionItem, setNewTransactionItem] = useState({
        category: "",
        description: "",
        amount: "",
        date: ""
    })

    const submitHandler =(e)=>{
        e.preventDefault()
        onSubmitTransaction(newTransactionItem)
        setNewTransactionItem({
            category: "",
            description: "",
            amount: "",
            date: ""
        })
    }

    const inputHandler =(e)=>{
        const {name, value} = e.target
        setNewTransactionItem(({...newTransactionItem, [name]:value}));
              
    }
 //console.log(newTransactionItem); 
  return (
    <form  id="addTransaction">
    <fieldset id="IdentityKinInfo" class="row g-3 scheduler-border">
        {/* <legend class="scheduler-border"> New Transaction</legend> */}
    
        <div class="transactionDetailInputDiv">
            <label class="clientdeets" for="selectOption">Category</label>
            <select 
            
            onChange={inputHandler}
            value={newTransactionItem.category}
            name="category"  id="companySelect" class="myformControl newCollectionDetails"
            required>
             {/* {inputCategories} */}
             <option>Please Select</option>
             <option>Food</option>
             <option>Clothing</option>
             <option>Transportation</option>
             <option>Entertainment</option>
             <option>Gift</option>
             <option>Income</option>
             <option>Housing</option>
            </select>
            <span><p class='errorMessages'></p></span>
        </div> 
        <div class="transactionDetailInputDiv">
            <span class="clientdeets" id="">Description</span>
            <input 
            onChange={inputHandler}
            value={newTransactionItem.description}
            id="Mobile" type="memo" name="description"class="myformControl newCollectionDetails" aria-label="Sizing example input" aria-describedby="" required></input>
            <span><p class='errorMessages'></p></span>
        </div>
        <div class="transactionDetailInputDiv">
            <span class="clientdeets" id="">Amount</span>
            <input 
            required
            onChange={inputHandler}
            value={newTransactionItem.amount}
            id="companyCode" min="1" type="number" name="amount"class="myformControl newCollectionDetails" aria-label="Sizing example input" aria-describedby=""></input>
            <span><p class='errorMessages'></p></span>
        </div>
        <div class="transactionDetailInputDiv">
            <span class="clientdeets" id="">Date</span>
            <input
            required
            onChange={inputHandler}
            value={newTransactionItem.date}
            id="Mobile" type="date" name="date"class="myformControl newCollectionDetails" aria-label="Sizing example input" aria-describedby=""></input>
            <span><p class='errorMessages'></p></span>
        </div>
        
        <p>*Once added, the transaction details can be viewed in the transaction list below.</p>
        <button  class="addTransactionBtn"
        onClick={submitHandler} 
        id="submit" 
        type="submit"
        disabled={!newTransactionItem.category || !newTransactionItem.description || !newTransactionItem.amount || !newTransactionItem.date}
        >Add</button>
    </fieldset>
    </form> 
  )
}
// style="background-color: black; color: white;"
 // const inputCategories = categories.map(category => 
    //     <option value={category}>{category}</option>
    //     )
    //     console.log(categories);
export default TransactionForm