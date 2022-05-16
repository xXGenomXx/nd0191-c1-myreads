import React, { useState, useEffect } from "react";
import { getAll } from "../../services/BooksAPI";
import PropTypes from 'prop-types'
import Shelf from '../Shelf/Shelf'



// import AuthService from "../services/auth.service";
// import { useNavigate } from "react-router-dom";

export const ListBook = ({setShowSearchpage,showSearchPage,Books,reloadBooksFun}) => {
  // ListBook.propTypes = {
  //   setShowSearchpage: PropTypes.func.isRequired,
  //   showSearchPage: PropTypes.array.isRequired

  // }



  return (
    <div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
      <div>
     <Shelf ShelfName={'Currently Reading'} Id={'currentlyReading'} Books={Books} reloadBooksFun={reloadBooksFun} />
     <Shelf ShelfName={'Want to Read'} Id={'wantToRead'} Books={Books} reloadBooksFun={reloadBooksFun} />
     <Shelf ShelfName={'Read'} Id={'read'} Books={Books} reloadBooksFun={reloadBooksFun} />
      </div>
    </div>
    <div className="open-search">
      <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a>
    </div>
  </div>
  );
};

export default ListBook;
