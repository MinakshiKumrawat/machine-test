import React, { Component } from 'react';
import {
    Route, Redirect, Switch, BrowserRouter,
  } from 'react-router-dom';
import Navigation from './comonents/navigation';
import Home from './pages/home';


const Base = () => {
     return <>
       <div className="main-container">
        <header>
           <Navigation />
        </header>
         <div className="content">
                <BrowserRouter>
                <Switch>
                    <Route path="/home" >
                    <Home />
                    </Route>
                    <Redirect to ="/home" />
                </Switch>
            </BrowserRouter>
         </div>
       </div>
    </>
    
}

export default Base;