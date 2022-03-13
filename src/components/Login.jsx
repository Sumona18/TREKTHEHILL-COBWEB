import React, {useState} from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Logpart from "./Logpart";

function Login() {
    const [user, setUser] = useState({
      fullName: "",
      username: "",
      email: "",
      password: ""
    });
    const [headingText, setHeading] = useState(false);
    

    function handleChange(event) {
      const { value, name } = event.target;

      setUser(preVal => {
        if(name === "fullName") {
          return {
            fullName: value,
            username: preVal.username,
            email: preVal.email,
            password: preVal.password
          };
        } else if(name === "username") {
          return {
            fullName: preVal.fullName,
            username: value,
            email: preVal.email,
            password: preVal.password
          }
        } else if(name === "email") {
          return {
            fullName: preVal.fullName,
            username: preVal.username,
            email: value,
            password: preVal.password
          }
        } else if(name === "password") {
          return {
            fullName: preVal.fullName,
            username: preVal.username,
            email: preVal.email,
            password: value
          }
        }
      });
    }
  
    function handleClick(event) {
      event.preventDefault();
      setHeading(true);
      

      const registered = {
        fullName: user.fullName,
        username: user.username,
        email: user.email,
        password: user.password
      }

      axios.post("http://localhost:4000/api/signup", registered)
        .then(res => console.log(res.data))
      
      setUser({
        fullName: "",
        username: "",
        email: "",
        password: ""
      })
    }
  
  
    return (
      <div>
        <center>
          <form onSubmit={handleClick} >
            <input name="fullName" onChange={handleChange} className="input" type="text" placeholder="Fullname" value={user.fullName} /><br />
            <input name="username" onChange={handleChange} className="input" type="text" placeholder="Username" value={user.username} /><br />
            <input name="email" onChange={handleChange} className="input" type="email" placeholder="Email id" value={user.email} /><br />
            <input name="password" onChange={handleChange} className="input" type="password" placeholder="Password" value={user.password} /><br /><br /><br />
            <button type="submit" className="butn">  <HashLink smooth to="/#hash"> Submit
          </HashLink></button>
          </form>
          <h1> {headingText}</h1>
        </center>
        </div>
  );
}

export default Login;