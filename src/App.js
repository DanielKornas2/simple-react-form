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

  handleChange = (e) => {
    // name = odczytuję name z inputa, np. email i na tej podstawie ustawiam stan
    const name = e.target.name;
    const type = e.target.type;

    if (type === "checkbox") {
      const isChecked = e.target.checked;

      // uzywam nawiasow kwadratowych bo przekazuje zmienna jako parametr
      this.setState({
       [name]: isChecked,
      })
    } else {
      this.setState({
        [name]: e.target.value,
      })
    }
    
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const validation = this.formValidation();

    if (validation.correct) {
      this.setState({
        username: "",
        email: "",
        password: "",
        accept: false,
        message: 'Formularz został wysłany!',
    
        errors: {
          username: false,
          email: false,
          password: false,
          accept: false,
        }
      }) 
    } else {
      this.setState({
        errors: {
          username: !validation.username,
          email: !validation.email,
          password: !validation.password,
          accept: !validation.accept,
        }
      })
    }
  }

  formValidation = () => {
    let username = false;
    let email = false;
    let password = false;
    let accept = false;
    let correct = false;

    if (this.state.username.length >= 2 && this.state.username.indexOf(' ') === -1) {
      username = true;
    }

    if (this.state.email.indexOf('@') !== -1) {
      email = true;
    }

    if (this.state.password.length >= 6) {
      password = true;
    }

    if (this.state.accept) {
      accept = true;
    }

    if (username && email && password && accept){
      correct = true;
    }

    return ({
      username,
      email,
      password,
      accept,
      correct
    })

  }

  componentDidUpdate(){
    // po 4 sekundach od wysłania kasuję wiadomość o wysłaniu formularza, czyli zeruje message w state
    if(this.state.message !== ''){
      setTimeout(() => 
      this.setState({
        message: '',
      }), 4000)
    }
  }

  render() {
    return (
      <div className="App">
        <form onSubmit= {this.handleSubmit} noValidate>
          <label htmlFor="user">Imię: 
          <input type="text" id="user" name="username" value={this.state.username} onChange={this.handleChange} />
          </label>
          {/* && - skrócony zapis ifa ? , oznacza, ze to co jest za && wykona sie tylko kiedy jest true.
          tzn jezeli jest error w state (true), to pokaze komunikat o bledzie */}
          {this.state.errors.username && <span>
          {this.warnings.username_incorrect}</span>}

          <label htmlFor="email">Email:
          <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange} />
          </label>
          {this.state.errors.email && <span>
          {this.warnings.email_incorrect}</span>}

          <label htmlFor="password">Hasło:
          <input type="password" id="password" name="password" value={this.state.password} onChange={this.handleChange} />
          </label>
          {this.state.errors.password && <span>
          {this.warnings.password_incorrect}</span>}

          <label htmlFor="accept">
          <input type="checkbox" id="accept" name="accept" checked={this.state.accept} onChange={this.handleChange} /> Akceptuję regulamin.
          </label>
          {this.state.errors.accept && <span>
          {this.warnings.accept_incorrect}</span>}

          <button>Wyślij</button>
        </form>
        {this.state.message && <h4>{this.state.message}</h4>}
      </div>
    );
  }
}

export default App;