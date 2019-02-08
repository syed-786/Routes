import React from "react";
import {NavLink } from "react-router-dom"; 

export const LinkComp = () => {
    return (

            <div>
               &emsp; <NavLink to="/" exact   activeStyle={{color:"green"}}> Home</NavLink>&emsp;
                <NavLink to="/hacker" exact   activeStyle={{color:"green" }}> Hacker</NavLink>&emsp;
                <NavLink to="/cracker" exact   activeStyle={{color:"green"}}> Cracker</NavLink>&emsp;
                <NavLink to="/phreaker" exact   activeStyle={{color:"green"}}> Phreaker</NavLink>&emsp;

            </div>

    );


}