import React, { Component, useEffect } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import {
  BrowserRouter as Router, Routes, Route, Link, Redirect, Navigate, PrivateRoute
} from "react-router-dom";
import Question from "./Components/Add-Question/Question";
import ViewQuestion from "./Components/ViewQuestion";
import StackOverflow from "./Components/StackOverflow";
import Auth from "./Components/Auth";
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebase';
import { login, logout, selectUser } from './features/userSlice';

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          displayName: authUser.displayName,
          email: authUser.email
        }))
      } else {
        dispatch(logout())
      }
    })
  }, [dispatch]);

  const PrivateRoute = ({ component: Component, ...rest }) =>
  (<Route {...rest} render={(props) => user ? (<Component {...props} />) : (
    <Navigate
      to={{
        pathname: "/auth",
        state: {
          from: props.location,
        }
      }
      }
    />
  )
  }
  />
  );



  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/auth" Component={Auth} />
          <Route exact path="/add-question" Component={Question} />
          <Route exact path="/question" Component={ViewQuestion} />
          <Route exact path="/" Component={StackOverflow} />


        </Routes>
      </Router>


    </div>
  );
}

export default App;
