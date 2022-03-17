import React, { useState } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Login({ handleLoggedIn }) {

  // const navigate = useNavigate();

  const [user, setUser] = useState({
    fullName: "",
    username: "",
    email: "",
    password: ""
  });

  function handleChange(event) {
    const { value, name } = event.target;

    setUser((preVal) => ({
      ...preVal,
      [name]: value
    }));
  }

  function handleClick(event) {

    event.preventDefault();

    const registered = {
      fullName: user.fullName,
      username: user.username,
      email: user.email,
      password: user.password
    }

    axios.post("http://localhost:4000/api/signup", registered)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => console.log(err));

    setUser({
      fullName: "",
      username: "",
      email: "",
      password: ""
    })

    handleLoggedIn();

    // navigate("/");
  }


  return (
    <div>
      <center><br /><br />
        <h1>Register here to take an appointment from Doctor</h1>
        <p>you'll recieve an email confirming the name and contact info</p>
        <form
          onSubmit={handleClick}
        >
          <input
            name="fullName"
            onChange={handleChange}
            className="input" type="text"
            placeholder="Full Name"
            value={user.fullName}
            required
          />
          <br />
          <input
            name="username"
            onChange={handleChange}
            className="input"
            type="text"
            placeholder="Username"
            value={user.username}
            required
          />
          <br />
          <input
            name="email"
            onChange={handleChange}
            className="input"
            type="email"
            placeholder="Email id"
            value={user.email}
            required
          />
          <br />
          <input
            name="password"
            onChange={handleChange}
            className="input"
            type="password"
            placeholder="Password"
            value={user.password}
            required
          />
          <br /><br />
          <HashLink smooth to="/#hash">
            <button type="submit" className="butn" onClick={handleLoggedIn}>
              Submit
            </button>
          </HashLink>
          <br /><br /><br />
        </form>
      </center>
    </div>
  );
}

export default Login;