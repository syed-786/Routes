import React from "react";

import {Link,Route } from "react-router-dom"; 

export const Hacker = ({match}) => {
    return (

            <div>
              <h1 style={{color:"darkgreen"}}>Hacking! is not a Crime...</h1>
            <h2 style={{color:"green"}}>Always Hack to Learn, Dont Learn to Hack!</h2>
          {/* <div style={{backgroundColor:"red",display:"inline-block", margin : "15px", padding: "15px"}}>Lets Begin!</div> */}

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