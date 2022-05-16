import React, { useState, useEffect } from "react";
import {search,update,get } from "../../services/BooksAPI";
import SelectIcon from "../../Pictures/Icons/selectIcon.png";
import MenuItem from '@mui/material/MenuItem';



// import AuthService from "../services/auth.service";
// import { useNavigate } from "react-router-dom";

export const SearchPage = ({setShowSearchpage,showSearchPage}) => {
  const [searchWord, setSearchWord] = useState('');
  const [BooksSearchRessult, setBooksSearchRessult] = useState([]);
  const debug =false
  useEffect(() => {
    {debug && console.log("Use") }
    
    },[])

  useEffect(() => {
    {debug && console.log("BooksSearchRessult ",BooksSearchRessult) }
if(searchWord){
    search(searchWord,10).then((result)=>{
      {debug && console.log("result a",result) }
    if(result[0] && 
      result[0].title){

        let counter = 1
        {debug && console.log(`Books Length ${result.length}`);}

        // Get Books Shelfs Start
       
        result.forEach(Book => {
          {debug && console.log(`Book.id  ${Book.id}`); }
      
         get(Book.id).then((specificBook)=>{
          {debug &&console.log(`specificBook.shelf ${counter}`, specificBook.shelf); }
         Book.shelf =  specificBook.shelf
         {debug && console.log(`Book.shelf ${counter}`,Book.shelf); }
     
      if(result.length=== counter){  setBooksSearchRessult(result)}
         counter++}) ;
          
          });

        // Get Books Shelfs End
    {debug && console.log("result c",result) }
  
    }else{
      setBooksSearchRessult([])
    }

    })  }
    {debug && console.log("BooksSearchRessult ",BooksSearchRessult) }
  
  },[searchWord])


  return (
    <div className="search-books">
    <div className="search-books-bar">
      <a
        className="close-search"
        onClick={() => setShowSearchpage(!showSearchPage)}
      >
        Close
      </a>
      <div className="search-books-input-wrapper">
        <input 
        value={searchWord}
        onChange={(e)=>{setSearchWord(e.target.value)}}
          type="text"
          placeholder="Search by title, author, or ISBN"
        />
      </div>
    </div>
    <div className="search-books-results">
      <ol className="books-grid">
      {
        BooksSearchRessult?.map((Book, index) => {
          return(
            <li  key={'li'+index}>
            <div className="book" key={'book'+index}>
              <div className="book-top" key={'book-top'+index}>
                <div
                  className="book-cover"
                  key={'book-cover'+index}
                  style={{
                    width: 128,
                    height: 193,
                    backgroundImage: `url('${Book.imageLinks?.smallThumbnail}')`,
                  }}
                ></div>
                <div className="book-shelf-changer"  key={'book-shelf-changer2'+index}>
                  <select value={Book.shelf} onChange={(e)=>{update(Book,e.target.value);}} >
                    <option value="disabled" disabled>Move to...</option>
                    <option value="currentlyReading" >Currently Reading</option>
                    <option value="wantToRead"   >Want to Read</option>
                    <option value="read" >Read</option>
                    <option value="none"  >None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">{Book.title}</div>
              <div className="book-authors">{Book.authors}</div>
            </div>
          </li>
          )   }) }
      </ol>
    </div>
  </div>
  );
};

export default SearchPage;