import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./Login.css";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router-dom";

const Login = () => {
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [newUser, setNewUser] = useState(false);

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
    }
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    error: '',
    accountCreated: false,
    confirmPassWord:'',
  })

  const handleBlur = (e) => {
    let isFormValid = true;
    if (e.target.name === "email") {
       isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if (e.target.name === "password") {
      const  isPasswordValid = e.target.value.length > 8;
      const isPassword = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(e.target.value);
      isFormValid = isPasswordValid && isPassword;
    }

    if (isFormValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  };

//////////////////////////////////////Form submit/////////////////

  const handleSubmit = (e) => {
  if (newUser&& user.email && user.password) {
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .then(result => {
        const newUserInfo = { ...user };
        newUserInfo.error = '';
        newUserInfo.accountCreated=true;
        setUser(newUserInfo);
        updateUserInfo(user.name);
       
      })
      .catch( (error)=>{
        const newUserInfo = { ...user };
        newUserInfo.error = error.message;
      const  errorCode = error.code;
        const errorMessage = error.message;
        newUserInfo.accountCreated = false;
        setUser(newUserInfo);
    });
    }
    if (!newUser && user.email && user.password) {
      firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then(result => {
          const newUserInfo = { ...user };
          newUserInfo.error = '';
          newUserInfo.accountCreated=true;
          setUser(newUserInfo);
          setLoggedInUser(newUserInfo);
          history.replace(from);
          
        })
        .catch(function (error) {
        
          const newUserInfo = { ...user };
          newUserInfo.error = error.message;
        const  errorCode = error.code;
          const errorMessage = error.message;
          newUserInfo.accountCreated = false;
          setUser(newUserInfo); 
      });
    }
  e.preventDefault();
}

  
  /////////////////////// Update user info//////////////////

  const updateUserInfo = (name) => {
    var user = firebase.auth().currentUser;
    user.updateProfile({
      displayName: name,
  
    }).then(function() {
      
    }).catch(function(error) {
      
    });
}

///////////////////////////googleSign////////////////////
  
  const googleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        const { displayName, email } = result.user;
        
        const signedInUser = {
          isSignedIn: true,
          name: displayName,
          email: email,
        };
        setLoggedInUser(signedInUser);
        history.replace(from);
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
      });
  };


  //////////////////////////////////////fbSignIn/////////////////////////

  const fbSignIn = () => {
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then(function (result) {
        const { displayName, email } = result.user;
        const signedInUser = {
          isSignedIn: true,
          name: displayName,
          email: email,
        };
        setLoggedInUser(signedInUser);
        history.replace(from);
    }) 
      .catch(error => {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
        var credential = error.credential;

    });
  }

  //////////////////////////////SignOut////////////////////////
  
  const handleSignOut = () => {
   
    firebase
      .auth()
      .signOut()
      .then((response) => {
        const signOutUser = {
          isSignedIn: false,
          email: "",
          password: "",
          name: "",
          photo: "",
          success: false,
        };
        setUser(signOutUser);
      })
      .catch(function (error) {});
  };

  return (
    <section>
      <div className="container">

        <div className="row">
          <div className="col-md-6 offset-md-3">
            <form onSubmit={handleSubmit} className="form-design">
              {newUser && < input className="form-control" type="text" name="first-name" placeholder="first name" onBlur={handleBlur} required />}<br />
              {newUser && <input className="form-control" type="text" name="last-name" placeholder="last name" onBlur={handleBlur} required />}<br />
              <input className="form-control" type="email" name="email" placeholder="email" onBlur={handleBlur} required /><br/>
              <input className="form-control" type="password" name="password" placeholder="password" onBlur={handleBlur} required /> <br />
              {newUser ? <input className="form-control btn-login" type="submit" value="Create an Account" />:  <input className="form-control btn-login" type="submit" value="Login" />}
              {
                user.accountCreated ? <p style={{color: "green"}}>Account {newUser? "created" :"LoggedIn "} successfully</p> : <p style={{color: "red"}}>{user.error}</p>
              }
              {
                newUser ?
                  <p className='text-center'>Have an account ? <span toggle-Btn onClick={() => setNewUser(!newUser)}>Login</span></p>
                  : <p className='text-center'>Have an account ? <span className="toggle-Btn" onClick={() => setNewUser(!newUser)}>SignUp</span></p>
              } 
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <button className="external-login-btn" onClick={googleSignIn}>Continue with Google </button>
            <button className="external-login-btn" onClick={fbSignIn}>Continue with Facebook</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
