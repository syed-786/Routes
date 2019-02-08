import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import {Route, Link, Switch, NavLink, Redirect} from "react-router-dom";
import {LinkComp} from "./Router/LinkContainer";
import {RouteComp} from "./Router/RouteContainer"

class App extends Component {
  // constructor(props){
  //   super(props);

  // }

  render() {


    return(
        <div className = "App">
            <h1 style={{color:"Tomato"}}>HELLO HACKERS!</h1>
            <LinkComp />
            <hr />
            <RouteComp />
        </div>


    );

  }





}







// const User = (params) => {
//   return (
//     <h1>Hello Users {params.username} </h1>
//   )
// }

// class App extends Component {
//   state = {
//     loggedin : false,
//   }

//   loginHandelr = (prevstate) => {
//     this.setState({loggedin : !prevstate.loggedin})
//   }

//   render() {
//     return (
//       <div className="App"> 
//        <h1>Hello Hackers!</h1>

//        <ul>
//        <li><NavLink to ="/" exact activeStyle={{color:"green"}}>Home </NavLink> </li>
//        <li><NavLink to ="/about" exact activeStyle={{color:"green"}}>About </NavLink> </li>
//        <li><NavLink to ="/user/Adeeb" exact  activeStyle={{color:"green"}}>User Adeeb </NavLink> </li>
//        <li><NavLink to ="/user/Phreaker" exact activeStyle={{color:"green"}} >User Phreaker </NavLink> </li>
//        </ul>

//       <input type = "button" value = {this.state.loggedin ? "log Out" : "log IN"} onClick = {this.loginHandelr} />

//        <hr />

//        <Switch>
//          <Route exact path = "/" render = {
//           () => { return (<h1>Hello Home</h1>) }
//          } />

//          <Route exact strict path ="/about" render = {
//            () =>  { return (<h1>Hello About</h1>) }
//          } />

//           <Route exact strict path ="/user/:username"  render = {({match}) => {
//             return (
//             this.state.loggedin ? (<User username = {match.params.username} /> ) : <Redirect to ="/" />
//             )
//           }}/>

//         </Switch>
//       </div>
//     );
//   }
// }

 export default App;
