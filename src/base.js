import React from 'react';
import {
    Route, Redirect, Switch, BrowserRouter,
  } from 'react-router-dom';
import Navigation from './comonents/navigation';
import Home from './pages/home';
import Task from './pages/task';
import User from './pages/user';


const Base = () => {
     return <>
       <div className="main-container">
        <header>
           <Navigation />
        </header>
         <div className="container">
               
                <Switch>
                    <Route path="/home" >
                      <Home />
                    </Route>
                    <Route path="/task" >
                      <Task />
                    </Route>
                    <Route path="/user" >
                      <User />
                    </Route>
                    <Redirect to ="/home" />
                </Switch>
           
         </div>
       </div>
    </>
    
}

export default Base;