import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import logo from './logo.svg';
import './App.css';

import Home from './Components/Home'
import Result from './Components/Result'
import Modal from './Components/Modal'
import Dashboard from './Components/Dashboard'

function App() {
  return (
		<BrowserRouter>
		<Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/result" component={Result}/>
			<Route path="/modal" component={Modal}/>
			<Route path="/dashboard" component={Dashboard} />
		</Switch>
		
		</BrowserRouter>
	)
}

export default App;
