import React, { useState } from 'react';
import {
    Route, Redirect, Switch
  } from 'react-router-dom';
import Navigation from './comonents/navigation';
import Home from './pages/home';
import Task from './pages/task';

const Base = () => {
  
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState({
    username:"admin",
    password:1234,
    updateValue:1234,
  })

  const [flag, setFlag] = useState(false);
  
  let name, value;
  const changeloginHendler  = (event) =>{
    
    name = event.target.name;
    value = event.target.value;

    setUser({ ...user,[name]: value});
  }
  
  
  const changeSaveHendler  = (e) =>{
    const {name , value} = e.target
    setUser( prevState => ({
        ...prevState,
        [name] : value
    }))
  }
  

  const loginHendler = (e) =>{
    if(user.username == "admin" && user.password == user.updateValue){
      setLogin(current => !current)
  }
  else{
      alert("Please Enter Valid User Name & Password");
      e.preventDefault();
  }
}

const logoutHendler = (e) =>{
  setLogin(current => !current);
  console.log(user.updateValue);
  e.preventDefault();
}

const changePasswordHendler = (e) => {
  setFlag(current => !current);
  e.preventDefault();
}

const savePasswordHendler = (e) => {
  console.log(user.username + "" + user.updateValue);
  setFlag(current => !current);
  e.preventDefault();
}

     return <>
       <div className="main-container">
         {
           login ? 
           <> 
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
                      <div className="user-page-wrap section-padding">
                        {flag ?
                          <>
                            <div className="form-group">
                              <label className="control-label">User Name:<span>Username</span></label>
                            
                            </div>
                            <div className="form-group">
                              <label className="control-label" >New Password:</label>
                              <input type="password" name="updateValue" onChange={changeSaveHendler} />
                            </div>
                            <div className="form-group">
                              <div className="btn-wrap">
                                <button type="button" className="btn btn-type-1"  onClick={savePasswordHendler}>Save Password</button>
                                <button type="button" className="btn btn-type-1" onClick={logoutHendler}>Logout</button>
                              </div>
                            </div>
                          </>
                         :
                           <>
                            <div className="form-group">
                              <label className="control-label">User Name: <span>{user.username}</span></label>
                             
                            </div>
                            <div className="form-group">
                              <label className="control-label">Password: <span>{user.updateValue}</span></label>
                             
                            </div>
                            <div className="form-group">
                              <div className="btn-wrap">
                                <button type="button" className="btn btn-type-1"  onClick={changePasswordHendler}>Change Password</button>
                                <button type="button" className="btn btn-type-1" onClick={logoutHendler}>Logout</button>
                              </div>
                            </div>
                         </>
                        }
                      </div>
                    </Route>
                    <Redirect to ="/home" />
                  </Switch>
              </div>
            </>
           :
            <>
              <div className="container">
                <div className="user-page-wrap section-padding">
                  <form className="form-horizontal" onSubmit={loginHendler} method="POST">
                      <div className="form-group">
                        <label className="control-label">User Name:</label>
                        <input type="text" name="username" onChange={changeloginHendler}/>
                      </div>
                      <div className="form-group">
                        <label className="control-label">Password:</label>
                        <input type="password" name="password" onChange={changeloginHendler}/>
                      </div>
                      <div className="form-group">
                        <div className="btn-wrap">
                          <button type="submit" className="btn btn-type-1">Login</button>
                        </div>
                      </div>
                  </form>
                </div>
              </div>
            </>
            
          }
       </div>
    </>
    
}

export default Base;