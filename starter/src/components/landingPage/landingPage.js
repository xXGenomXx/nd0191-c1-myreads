import  { useState, useEffect,Fragment } from "react";
import { getAll } from "../../services/BooksAPI";
import SearchPage from '../SearchPage/SearchPage'
import ListBook from '../ListBook/ListBook'



// import AuthService from "../services/auth.service";
// import { useNavigate } from "react-router-dom";

export const LandingPage = () => {

  const [showSearchPage, setShowSearchpage] = useState(false);
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
    <Fragment>
    {showSearchPage ? (
        <SearchPage setShowSearchpage={setShowSearchpage} showSearchPage={showSearchPage} />
    ) : (
      <ListBook setShowSearchpage={setShowSearchpage} showSearchPage={showSearchPage} Books={Books} reloadBooksFun={reloadBooksFun} />
    )}
    </Fragment>
  );
};


export default LandingPage;