import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NavigationBar from '../NavigationBar/NavigationBar';
import OurCulture from '../Pages/OurCulture/OurCulture';
import ContactUs from '../Pages/ContactUs/ContactUs';
import Blog from '../Pages/Blog/Blog';
import Header from '../Header/Header';
import Menu from '../Pages/Menu/Menu';
import Home from '../Pages/Home/Home';
import Admin from '../Pages/Admin/Admin';
import Cupcakes from '../Pages/Cupcakes/Cupcakes';
// import 'styles/css/index.css';
// import  from '';

class PageRouter extends Component{
    render(){
        return(
            <section>
                <Header />
                <NavigationBar />
                <Route path = '/blog' component = { Blog } />
                <Route path = '/menu' component = { Menu } />
                <Route exact path = '/' component = { Home } />
                <Route path = '/admin' component = { Admin } />
                <Route path = '/our-culture' component = { OurCulture} />
                <Route path = '/menu/cupcakes' component = { Cupcakes } /> 
                <Route path = '/our-culture/contactus' component = { ContactUs } /> 
            </section>
        )
    }
}

export default PageRouter;