import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';

function App() {
  return (
//    <div className="App">
//     hello World
//    </div>
	  <div className="container">
	  	<div className="row">
	  		<div className="col-xs-1 col-xs-offset-11">
	  			<h1>Hello</h1>
	  		</div>
	  	</div>
	  	
	  	<div className="row">
	  		<div className="col-xs-1 col-xs-offset-11">
	  			<Header />
	  		</div>
	  	</div>
	  </div>
	  

  );
}

export default App;
