import React, { useEffect, useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import { loginauth } from "../../axios/Auth";

function Login() {
  const [email, setemail] = useState<string>("");
  const [password, setpassword] = useState<string>("");
  const [login, setlogin] = useState<Boolean>(false);
  const [submit, setsubmit] = useState<Boolean>(false);

  const submituser = () => {
    const result = loginauth(email, password);
    console.log(result);
  };

  useEffect(() => {
    if (login) {
      submituser();
    }
  }, [submit]);

  const loginuser = (event: any) => {
    event?.preventDefault();
    setlogin(true);
    return submit ? setsubmit(false) : setsubmit(true);
  };

  return (
    <>
      <Header />
      <div className="login-div">
        <form className="login" name="regform">
          <h1 className="sign">Sign In</h1>
          <div id="errormessage" />
          <span className="seperator" />
          <div className="input-text">
            <input
              type="email"
              name="email"
              placeholder="Enter your Email"
              onChange={(event) => {
                setemail(event.target.value);
              }}
            />
          </div>
          <div className="input-text">
            <input
              id="pass_signup"
              type="password"
              name="password"
              placeholder="Enter your password"
              onChange={(event) => {
                setpassword(event.target.value);
              }}
            />
            <i
              className="fa fa-fw fa-eye field-icon toggle-password"
              id="togglePassword"
            />
          </div>
          <button className="signin-button" type="submit" onClick={loginuser}>
            Sign In
          </button>
          <div className="remember-flex">
            <div />
            <div className="help">
              <a className="color_text" href="https://www.google.com/gmail/">
                Need help?
              </a>
            </div>
          </div>
        </form>
        <div
          className="protection color_link help"
          style={{ margin: "0px 30%" }}
        >
          This page is protected by Google reCAPTCHA .
          <Link to="/">Learn more.</Link>
        </div>
        <span className="seperator" />
        <form
          style={{ opacity: "0" }}
          className="aftersubmit"
          name="verificationform"
        >
          <hr />
          <div className="input-text">
            <input type="password" name="code" placeholder="Enter code" />
          </div>
          <input className="signin-button" type="submit" value="Register" />
        </form>

        <br />
        <br />
      </div>
      <div className="bottom">
        <div className="bottom-width">
          <div className="questions">
            <span>
              Questions? <br />
              Ask on :
              <a href="mailto: Apna_theatre@gmail.com" className="tel-link">
                Apna_theatre@gmail.com
              </a>
            </span>
            <select className="fa select-language">
              <option> English</option>
              <option> Hindi</option>
            </select>
          </div>

          <div>
            <ul className="bottom-flex">
              <li className="list-bottom">
                <a href="faq.html" className="link-bottom">
                  FAQ
                </a>
              </li>
              <li className="list-bottom">
                <a href="/" className="link-bottom">
                  Help Center
                </a>
              </li>
              <li className="list-bottom">
                <a href="/" className="link-bottom">
                  Terms of Use
                </a>
              </li>
              <li className="list-bottom">
                <a href="/" className="link-bottom">
                  Privacy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <button
        id="scrollToTopButton"
        title="Go to top"
        className="ml-5"
        type="submit"
      >
        <i className="fa fa-angle-double-up" aria-hidden="true" />
      </button>
    </>
  );
}

export default Login;
