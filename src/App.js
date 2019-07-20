import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';

//function App() {
//	const user={
//	name:"xuebing",
//	hobbies:["sports","readings"]
//	}
//  return (
//	  <div className="container">
//	  	<div className="row">
//	  		<div className="col-xs-1 col-xs-offset-11">
//	  			<h1>Hello</h1>
//	  		</div>
//	  	</div>
//	  	
//	  	<div className="row">
//	  		<div className="col-xs-1 col-xs-offset-11">
//	  			<Header name={"weishao"} age = {20} user ={user} />
//	  		</div>
//	  	</div>
//	  </div>
//	  
//
//  );
//}
class App extends Component {
	render(){
		const user={
		name:"xuebing",
		hobbies:["sports","readings"]
		}
	    return (
		  <div className="container">
		  	<div className="row">
		  		<div className="col-xs-1 col-xs-offset-11">
		  			<h1>Hello</h1>
		  		</div>
		  	</div>	
		  	
		  	<div className="row">
		  		<div className="col-xs-1 col-xs-offset-11">
		  			<Header name={"wehsao"} age ={20} user={user}/>
		  		</div>
		  	</div>	  	
		  </div>
		  );
	}
}
export default App;
