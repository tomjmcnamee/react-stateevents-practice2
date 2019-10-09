import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import BeyContainer from './BeyContainer'
import Favorites from './Favorites'



class App extends Component {

  // changeFavorite(clickedPictureId) {
    // let newState = {{...this.state.data} ...this.obj]
    // // clickedPictureId.persist()
    // console.log("app changeFav functin: ", this.obj)
    // // let matchingObj = newState.find( id => id === clickedPictureId)
    // matchingObj.favorite = !matchingObj.favorite
    // this.setState({ 
    //   data: newState
    //  })
  // }

  changeFavorite = (obj) => {
    let newState = [...this.state.data]
    let matchingObj = newState.find( object => object === obj)
    matchingObj.favorite = !matchingObj.favorite
    this.setState({ 
      data: newState
    })
    console.log("app changeFav function-OBJARG: ", this.state)
  }

  componentDidMount() {
    fetch("http://localhost:4000/beys")
    .then(resp => resp.json())
    // .then(response => console.log("fetch data ", response))
    .then(response => this.setState({ data: response }))
  }

  state = {
    data:  [] 
  }

  render() {
    console.log("render in App.js - state ", this.state)
    
    return (
      <div className="container">
        <BeyContainer something={this.state.data} clickHandler={this.changeFavorite}/>
        <Favorites something={this.state.data} clickHandler={this.changeFavorite} />
      </div>
    ) // ends Return
  } // ends Render
} // ends Class

export default App;
