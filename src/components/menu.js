import React,{Component} from 'react';
import Home from './home';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";

class Menu extends Component {
  render(){
    return (
     
           <div id="menu-container">
        <div id="menu-wrapper">
          <div id="hamburger-menu"><span /><span /><span /></div>
          
        </div>
       
        <ul className="menu-list accordion">
        
        <li id="nav1" > 
            <span className="icon-plus" />
            <Link to="/home">Trang chủ</Link>
          </li>
         
          <li id="nav2" className="toggle accordion-toggle"> 
            <span className="icon-plus" />
            <a className="menu-link" href="#">Sinh viên</a>
          </li>
         
          <ul className="menu-submenu accordion-content">
            <li><a className="head" href="#">Quản lý sinh viên</a></li>
            <li><a className="head" href="#"></a></li>
            <li><a className="head" href="#"></a></li>
          </ul>
          
          <li id="nav3" className="toggle accordion-toggle"> 
            <span className="icon-plus" />
            <a className="menu-link" href="#">Môn học</a>
          </li>
         
          <ul className="menu-submenu accordion-content">
            <li><a className="head" href="#">Java</a></li>
            <li><a className="head" href="#">Php</a></li>
          </ul>
         
         
         
        </ul>
     
      </div>
          
          
              
      );
  }
}

export default Menu;
