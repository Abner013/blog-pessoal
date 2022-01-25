import React from 'react';
import {BrowserRouter as Router, Route , Switch } from 'react-router-dom'
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import './App.css';


function App() {
  return (
    <div>
    <Router>
      <Navbar />
      <Switch >
        <div style={{minHeight: '100vh'}}>
          
          <Route path='/login'>
            <Login />
          </Route>
          
          <Route exact path="/home">
            <Home />
          </Route>
        </div>
      </Switch>
      <Footer />
    </Router>
    </div>
  )
}

export default App;
