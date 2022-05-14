import React, { useState, useEffect } from "react";
import { getAll } from "../../services/BooksAPI";
import PropTypes from 'prop-types'
import Shelf from '../Shelf/Shelf'



// import AuthService from "../services/auth.service";
// import { useNavigate } from "react-router-dom";

export const ListBook = ({setShowSearchpage,showSearchPage}) => {
  // ListBook.propTypes = {
  //   setShowSearchpage: PropTypes.func.isRequired,
  //   showSearchPage: PropTypes.array.isRequired

  // }

  const [Books, setBooks] = useState([]);
  const [reloadBooks, setReloadBooks] = useState(false);

  useEffect(() => {
     getAll().then((result)=>{
    console.log("result ",result)
    setBooks(result)

    })
  
  },[reloadBooks])

  const reloadBooksFun = () =>{
    setReloadBooks({reloadBooks:!reloadBooks})
  }

  return (
    <div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
      <div>
     <Shelf ShelfName={'Currently Reading'} Key={'currentlyReading'} Books={Books} reloadBooksFun={reloadBooksFun} />
     <Shelf ShelfName={'Want to Read'} Key={'wantToRead'} Books={Books} reloadBooksFun={reloadBooksFun} />
     <Shelf ShelfName={'Read'} Key={'read'} Books={Books} reloadBooksFun={reloadBooksFun} />
      </div>
    </div>
    <div className="open-search">
      <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a>
    </div>
  </div>
  );
};

export default ListBook;
