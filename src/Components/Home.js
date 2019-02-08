import React from "react";
import {NavLink} from "react-router-dom";
import {Route,Link} from "react-router-dom";
export const Home = ({match}) => {
    console.log('here:  ', match)
    return (

            <div>
              <h1 style={{color:"darkgreen"}}>Welcome to the World of Hacking!</h1>
            <h2 style={{color:"green"}}>Your one and only place to be an all time Elite Hacker...</h2>
            <div style={{backgroundColor:"red",display:"inline-block", margin : "15px", padding: "15px"}}>Lets Begin!</div><br />
            {console.log(match)}
                {/* <NavLink   to={`/about/Hackers`} ><h2>About</h2></NavLink>
   
                <Route   path = {`/about/:name`} render = {({match}) => {
                        return (
                            <div>
                                <h1>{match.params.name}</h1>
                               <p> {match.params.name} of today are the Wizards of tommorow.
                                They are Doers and creators of Computers.{console.log("***" +match.params)}
                            </p>
                            </div>
                        )
                }} /> */}

                <div><h2>Catogries</h2>
      {" "}
      <ul>
        <li>
          <Link to={`${match.url}/hackers`} activestyle = {{color:"pink"}} style={{color:"green"}}>Shoes</Link>
        </li>
        <li>
          <Link to={`${match.url}/boots`} activestyle={{ color: "pink" }}>Boots</Link>
        </li>
        <li>
          <Link to={`${match.url}/footwear`} activestyle={{ color: "pink" }}>Footwear</Link>
        </li>
      </ul>
      <Route
        path={`${match.path}/:name`}
        render={({ match }) => (
          <div>
            {" "}
            <h3> {match.params.name} </h3>{console.log(match , match.params) }
          </div>
        )}
      />
    </div>


            </div>

    );


}