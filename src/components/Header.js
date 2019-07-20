import React,{ Component } from 'react';
import ProTypes from 'prop-types'
//function Header() {
//	var that =this;
//	console.log(this.props); //函数形式不能使用this
//  return (
//	  <div className="container">
//	  	<div className="row">
//	  		<div className="col-xs-1 col-xs-offset-11">
//	  			<h1>Home!</h1>
//	  		</div>
//	  	</div>
//	  </div>
//  );
//}
export default class Header extends Component{
	
	render(){
		console.log(this.props);
		return (
		  <div className="container">
		  	<div className="row">
		  		<div className="col-xs-1 col-xs-offset-11">
		  			<h1>my name is {this.props.name},age = {this.props.age}</h1>
		  		</div>
		  	</div>
		  </div>
	  	);
	}
}

//export default Header; // 可以放到 class前面
	//父组件传入de参数检查，若类型不多，会报错
	Header.proTypes={
		name : ProTypes.string,
		age : ProTypes.number
	}