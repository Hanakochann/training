import React,{Component} from 'react';
import Home from '../home';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
class RouterURL extends Component{
	render(){
		return(
			
				<div>
					<Route exact path="/home" component={Home}></Route>

				</div>
			
		);
	}
}
export default RouterURL;