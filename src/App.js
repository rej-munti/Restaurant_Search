import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import React from "react";
import  {Home, LogIn, MakeAccount,Suggestion} from './components';
import'./App.css';
// import Suggetion from './components/SuggestionPage';
// import Home from './components/Main';
// import MakeAccount from './components/MakeAccount';
// import LogIn from './components/LogIn';

class App extends React.Component {
  render() {
    return (
  <Router>
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route path="/SuggestionPage" component={Suggestion}/>
    <Route path="/MakeAccount" component={MakeAccount}/>
    <Route path="/LogIn" component={LogIn}/>
    </Switch>
  </Router>
    );
  }
}


export default App;
