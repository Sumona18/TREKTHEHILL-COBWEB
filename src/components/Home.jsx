import React from "react";
import quoteimg from "./images/quoteimg.jpg";
import Course from "./Course";
import Logpart from "./Logpart";


function Home({ isLoggedIn }) {

  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>

        </div>
      </div>

      <center>
        <h2 className="headquote">“Sometimes you climb out of bed in the morning and you think, I’m not going to make it, but you laugh inside — remembering all the times you’ve felt that way.” <br /><br />— Charles Bukowski</h2>
      </center>
      <img className="img" src={quoteimg} alt="error" />

      <Course />
      <Logpart isLoggedIn={isLoggedIn} />

    </div>
  );
}

export default Home;