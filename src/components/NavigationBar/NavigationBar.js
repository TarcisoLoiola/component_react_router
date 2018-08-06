import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavigationBar extends Component {
    render() {
        return (
            <div>
            <ul  className="nav nav-tabs">
            
                <li className={window.location.pathname === "/" ? "active" : ""}>
                    <Link to='/'><button> Home </button></Link>
                </li>
                <li className={window.location.pathname === "/menu" ? "active" : ""}>
                    <Link to='/menu'><button active> Menu </button></Link>
                </li>
                <li className={window.location.pathname === "/blig" ? "active" : ""}>
                    <Link to='/blog'><button> Blog </button></Link>
                </li>
                <li className={window.location.pathname === "/our-culture" ? "active" : ""}>
                    <Link to='/our-culture'><button> Our culture </button></Link>
                </li>
                <li className={window.location.pathname === "/admin" ? "active" : ""}>
                    <Link to='/admin'><button> Admin </button></Link>
                </li>
            </ul>
            </div>
        )
    }
}

export default NavigationBar;