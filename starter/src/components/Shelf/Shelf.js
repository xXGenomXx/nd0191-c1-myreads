import React, { useState, useEffect } from "react";
import Book from '../Book/Book'
import { getAll,update } from "../../services/BooksAPI";


// import AuthService from "../services/auth.service";
// import { useNavigate } from "react-router-dom";

export const Shelf = ({ShelfName,Id,Books,setReloadBooks,reloadBooks,reloadBooksFun}) => {
  


  return (
    <div className="bookshelf" key={"bookshelf"+Id}>
    <h2 className="bookshelf-title">{ShelfName}</h2>
    <div className="bookshelf-books" key={"bookshelf-books"+Id}>
      <ol className="books-grid">
      {
        Books.map((Book, index) => {if(Book.shelf === Id){
          return(
            <li key={'Li'+index}>
            <div className="book" key={'book'+index}>
              <div className="book-top" key={'book-top'+index}>
                <div
                  className="book-cover"
                  key={'book-cover'+index}
                  style={{
                    width: 128,
                    height: 193,
                    backgroundImage: `url('${Book.imageLinks.smallThumbnail}')`,
                  }}
                ></div>
                <div className="book-shelf-changer"  key={'book-shelf-changer'+index}>
                  <select value={Book.shelf} onChange={(e)=>{update(Book,e.target.value).then(()=>{reloadBooksFun() })}}>
                    <option value="none" disabled>
                      Move to...
                    </option>
                    <option value="currentlyReading">
                      Currently Reading
                    </option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">{Book.title}</div>
              <div className="book-authors">{Book.authors}</div>
            </div>
          </li>
          )
                }
        })

      }
     
      </ol>
    </div>
  </div>
  );
};

export default Shelf;
