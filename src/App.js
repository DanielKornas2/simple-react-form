import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    username: "",
    email: "",
    password: "",
    accept: false,
    message: '',

    errors: {
      username: false,
      email: false,
      password: false,
      accept: false,
    }
  }

  warnings = {
    username_incorrect: "Nazwa nie może zawierać spacji i musi być dłuższa niż 2 litery",
    email_incorrect: "Email musi zawierać @",
    password_incorrect: "Hasło musi być dłuższe niż 5 znaków",
    accept_incorrect: "Zakceptuj regulamin.",
  }
  
  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
