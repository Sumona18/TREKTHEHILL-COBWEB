import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import BotApp from "../bot/src/BotApp";
import Login from "./Login";


function Logpart() {

   const [isLoggedIn,setIsLoggedIn]=useState(false);
    
   function handleLoggedIn(){
       setIsLoggedIn(true);
   }

   if (isLoggedIn === false)
      return (
         <div className="p2">
            <center>
               <h2>Wondering how you can join the mental health solution? Let us show you…</h2>
               <p className="p3">Register here to chat with The Nerve Guru for free</p>
               <Button className="btn" variant="dark"><NavLink className="nav-link" to="/login">
                   Sign Up 
                </NavLink></Button>
               <br /><br />
               
            </center>
         </div>
      );
   else
      return (
         <center id="hash" className="p2">
            <h1>Hello </h1>
            <h4>Wanna get on a chat with The Nerve Guru?</h4>
            <p>Let's reach to The Nerve Guru. Just know that you matter to us.</p><br/>
            
            {/* <Button className="btn" variant="dark">Click Here</Button> */}
            <BotApp />
         </center>
      );

}
export default Logpart;