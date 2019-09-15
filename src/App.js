import React, { Component } from 'react';
import './App.css';
import "./utils/bootstrap.min.css"
import "./utils/font-awesome/css/font-awesome.min.css"
import Header from "./componentes/Header"
import Main from "./componentes/Main"
import Footer from "./componentes/Footer"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}

export default App;
