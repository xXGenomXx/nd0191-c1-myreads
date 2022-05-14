import  { useState, useEffect,Fragment } from "react";
import { getAll } from "../../services/BooksAPI";
import SearchPage from '../SearchPage/SearchPage'
import ListBook from '../ListBook/ListBook'



// import AuthService from "../services/auth.service";
// import { useNavigate } from "react-router-dom";

export const LandingPage = () => {

  const [showSearchPage, setShowSearchpage] = useState(false);

  useEffect(() => {
    let res = getAll()
    console.log("Res ",res)
  
  },[])

  return (
    <Fragment>
    {showSearchPage ? (
        <SearchPage setShowSearchpage={setShowSearchpage} showSearchPage={showSearchPage} />
    ) : (
      <ListBook setShowSearchpage={setShowSearchpage} showSearchPage={showSearchPage} />
    )}
    </Fragment>
  );
};


export default LandingPage;