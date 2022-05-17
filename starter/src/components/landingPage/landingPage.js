import  { useState, useEffect,Fragment } from "react";
import { getAll } from "../../services/BooksAPI";
import SearchPage from '../SearchPage/SearchPage'
import ListBook from '../ListBook/ListBook'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';



// import AuthService from "../services/auth.service";
// import { useNavigate } from "react-router-dom";

export const LandingPage = () => {

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
    <Router>
   
    <Route exact path='/searchPage'>
    <SearchPage reloadBooksFun={reloadBooksFun} />
    </Route>)

    <Route exact path='/'>
    <ListBook Books={Books} reloadBooksFun={reloadBooksFun} />
    </Route>

    </Router>
    </Fragment>
  );
};


export default LandingPage;