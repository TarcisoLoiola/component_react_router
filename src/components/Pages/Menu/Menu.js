import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Menu extends Component{
    render(){
        return(
            <div>
                Menu
                <Link to = '/menu/cupcakes'><button> Cupcakes </button></Link>               
            </div>
        )
    }
}

export default Menu;