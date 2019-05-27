import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Content from './components/content';
import Menu from './components/menu';
import RouterURL from './components/routerURL/routerURL';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
class App extends Component {
  render(){
    return (
    	<Router>
      <div style={{marginTop: '60px'}}>
      	<RouterURL />
        <Menu />
        
        <Content />
        
      </div>
      </Router>
      );
  }
}

export default App;
