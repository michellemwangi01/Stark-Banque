import React from 'react';
import '../Styles/SearchBar.css';
import { useState } from 'react';

const Filter = ({onSearchFilter}) => {
  const [searchInput, setSearchInput] = useState('')

  const clearInput = () => {
    const input = document.getElementsByTagName('input')[0];
    setSearchInput('');
  };

  const handleClearClick = () => {
    clearInput();
    onSearchFilter('')

  };

  const searchInputhandler=(e)=>{
    setSearchInput(e.target.value)
    onSearchFilter(searchInput)
  }
  
  const submitHandler =(e)=>{
    e.preventDefault()
    console.log(searchInput);
  }

  return (
    <div className="filterContainer">
      <form onSubmit={submitHandler} id="searchForm" action="">
        <input 
        value={searchInput}
        onChange={searchInputhandler} 
        className="search" type="search" 
        required />
        <i id="searchIcon" className="fa fa-search"></i>
        <a className="clearSearch" href="javascript:void(0)" onClick={handleClearClick}>
        <i class="fa-solid fa-x" style={{color: "#e2e6ee"}}></i>clear
        </a>
      </form>
    </div>
  );
};

export default Filter;
