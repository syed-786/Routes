import React from "react";
import {Switch, Route } from "react-router-dom"; 
import {Home} from "../Components/Home"
import {Hacker} from "../Components/Hacker"
import {Cracker} from "../Components/Cracker"
import {Phreaker} from "../Components/Phreaker"
export const RouteComp = () => {
    return (

            <div>
               <Switch>
                   <Route   path = "/" component ={Home} />
                    <Route exact  path = "/hacker" component ={Hacker} />
                   <Route  exact  path = "/cracker" component ={Cracker} />
                   <Route exact  path = "/phreaker" component ={Phreaker} /> 
                   <Route path = "*" render = {() => {
                     return  <h1>404. Page not found </h1>
                   }} /> 
                </Switch>
            </div>

    );


}