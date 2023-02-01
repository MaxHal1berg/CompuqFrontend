import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListCustomerComponent from './components/ListCustomerComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateCustomerComponent from './components/CreateCustomerComponent';
import ViewCustomerComponent from './components/VievCustomerComponent';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Router> 
          <HeaderComponent />
            <div className='container'>
              <Switch>
                    <Route path = "/" exact component = {ListCustomerComponent}></Route>
                    <Route path = "/customers" component = {ListCustomerComponent}></Route>
                    <Route path = "/add-customer/:id" component = {CreateCustomerComponent}></Route>
                    <Route path = "/view-customer/:id" component = {ViewCustomerComponent}></Route>
              </Switch>
            </div>
          <FooterComponent />
        </Router>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
