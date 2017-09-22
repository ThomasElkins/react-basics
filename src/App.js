import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';

class App extends Component {
  state = {
    currName: 'Name',
    newName: ''
  }

  updateName = (name) => {
    this.setState({
      currName: name
    })
  }


  render() {
    return (
      <div className="App">
        <Header name={this.state.currName}/>
        <h1>{this.state.currName}</h1>
        <form onSubmit={e => {
            this.updateName(e.target.name.value)
            e.target.name.value = ""
            e.preventDefault()
          }}>
          <input type="text" name="name"></input>
          <br></br>
          <button type="submit">Update Name</button>
        </form>
        <br></br>
        <Footer name={this.state.currName}/>
      </div>
    );
  }
}

export default App;
