import React, { Fragment, useState } from "react";
import { Navigate } from "react-router-dom";

const Homepage = () => {
  //INFO HOLDER
  var registeredUsers = [
    { email: "khammy@gmail.com", password: "KM1234" },
    { email: "rora@gmail.com", password: "RR1234" },
    { email: "dom@gmail.com", password: "DM1234" }
  ];
  //USESTATE
  const [isVerified, setIsVerified] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //HANDLER FUNCTION
  const InfoHandler = (e, setInfo) => {
    return setInfo(e.target.value);
  };

  //FUNCTIONS
  const verifyUser = (e, p) => {
    if (email === "" && password === "") {
      alert("please enter your email or password");
    } else if (e && p) {
      console.log("user verified");
      setIsVerified(true);
    } else {
      alert("incorrect email or password");
      //would like to change this to pop-up alert
    }
  };
  const verifyEmail = (e) => {
    if (registeredUsers.some((d) => e === d.email)) return true;
  };
  const verifyPassword = (e) => {
    if (registeredUsers.some((d) => e === d.password)) return true;
  };
  //MAIN CODE
  return (
    <Fragment>
      <div class="d-flex justify-content-center gap-8">

        {/* LOGIN FORM */}
        <form
          style={{
            width: "20rem",
            padding: "0.8rem",
            borderRadius: "3%",
            boxShadow: "0.2rem 1rem 3rem #888888"
          }}
          onSubmit={(e) => {
            e.preventDefault();
            verifyUser(verifyEmail(email), verifyPassword(password));
          }}
        >
          {/* EMAIL */}
          <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="Email or Phone Number"
              onChange={(e) => InfoHandler(e, setEmail)}
            />
            <label for="floatingTextarea2">Email</label>
          </div>
          {/* PASSWORD */}
          <div class="form-floating mb-3">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
              onChange={(e) => InfoHandler(e, setPassword)}
            />
            <label for="floatingTextarea2">Password</label>
          </div>
          {/* LOG-IN BUTTON */}
          <div class="d-grid gap-2" style={{paddingBottom: "0.8rem"}}>
            <button class="btn btn-primary" type="submit" value="Submit">
              Log In
            </button>
          </div>
          <a
            class="d-flex justify-content-center"
            href={
              "//"
            }
          >
            Forgot Password?
          </a>
          <hr />
          {/* SIGN-UP BUTTON */}
          <div class="d-grid gap-2 col-6 mx-auto">
            <button class="btn btn-success" type="submit" value="Submit">
              Sign Up
            </button>
          </div>
        </form>
        {isVerified ? <Navigate to="/feed" /> : null}
      </div>
    </Fragment>
  );
};

export default Homepage;