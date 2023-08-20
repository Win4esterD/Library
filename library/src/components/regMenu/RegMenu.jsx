import React from "react";
import "./regMenu.scss";
import { regMenuContext } from "../../context/regMenuContext";
import { useContext, useRef } from "react";

const RegMenu = () => {
  const {
    regMenu,
    setRegMenu,
    SignUpWindow,
    setSignUpWindow,
    authorisedUser,
    setAuthorisedUser,
    setIsAuth,
  } = useContext(regMenuContext);

  const firstName = useRef(11);
  const lastName = useRef(12);
  const regEmail = useRef(13);
  const regPass = useRef(14);

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function generateCardNumber() {
    let number = "";
    const cardNumberLength = 16;

    for (let i = 0; i < cardNumberLength; i++) {
      number += getRandomIntInclusive(0, 9).toString();
    }

    return number;
  }

  //Register menu, where a user can register
  const registerMenu = () => {
    return (
      <>
        <h3 className="reg-window__header">REGISTER</h3>
        <form
          className="reg-window__form"
          action=""
          onSubmit={(event) => {
            setRegMenu("none");
            localStorage.setItem(
              regEmail.current.value,
              JSON.stringify({
                firstName: firstName.current.value,
                lastName: lastName.current.value,
                email: regEmail.current.value,
                password: regPass.current.value,
                cardNumber: generateCardNumber(),
                authorised: true,
              })
            );
          }}
        >
          <label className="reg-window__field-name" htmlFor="name">
            First name
          </label>
          <input
            className="reg-window__input-field"
            type="text"
            name="name"
            required
            ref={firstName}
          ></input>
          <label className="reg-window__field-name" htmlFor="name">
            Last name
          </label>
          <input
            className="reg-window__input-field"
            type="text"
            name="last-name"
            required
            ref={lastName}
          ></input>
          <label className="reg-window__field-name" htmlFor="name">
            E-mail
          </label>
          <input
            className="reg-window__input-field"
            type="email"
            name="e-mail"
            required
            ref={regEmail}
          ></input>
          <label className="reg-window__field-name" htmlFor="name">
            Password
          </label>
          <input
            className="reg-window__input-field"
            type="password"
            name="password"
            minLength={8}
            required
            ref={regPass}
          ></input>
          <button className="button reg-window__button">Sign Up</button>
        </form>
        <div className="reg-window__question-wrapper">
          <p className="reg-window__question">Already have an account?</p>
          <p
            className="reg-window__action"
            onClick={() => {
              setSignUpWindow("Log In");
            }}
          >
            Login
          </p>
        </div>
      </>
    );
  };

  const logIn = () => {
    
    // const userEmail = authorisedUser.email;
    // const userData = JSON.parse(localStorage.getItem(userEmail));
    // userData["authorised"] = false;
    // localStorage.setItem(userEmail, JSON.stringify(userData));

    // setIsAuth(false);
    // setAuthorisedUser("");
  };

  const logInMenu = () => {
    return (
      <>
        <h3 className="reg-window__header">Login</h3>
        <form
          className="reg-window__form"
          action="#"
          // onSubmit={(event) => event.preventDefault()}
        >
          <label className="reg-window__field-name" htmlFor="name">
            E-mail or readers card
          </label>
          <input
            className="reg-window__input-field"
            type="email"
            name="name"
            required
          ></input>
          <label className="reg-window__field-name" htmlFor="name">
            Password
          </label>
          <input
            className="reg-window__input-field"
            type="password"
            name="last-name"
            minLength={8}
            required
          ></input>
          <button className="button reg-window__button">Log In</button>
        </form>
        <div className="reg-window__question-wrapper">
          <p className="reg-window__question">Don’t have an account?</p>
          <p
            className="reg-window__action"
            onClick={(e) => {
              setSignUpWindow(e.target.innerHTML);
            }}
          >
            Register
          </p>
        </div>
      </>
    );
  };



  const menus = {
    "Log In": logInMenu(),
    Register: registerMenu(),
  };

  return (
    <div
      className="dark"
      style={{ display: regMenu }}
      onClick={() => setRegMenu("none")}
    >
      <div className="reg-window" onClick={(e) => e.stopPropagation()}>
        <img
          className="reg-window__close"
          src="./assets/img/icons/close_btn.svg"
          alt="close button"
          onClick={() => setRegMenu("none")}
        />
        {menus[SignUpWindow]}
      </div>
    </div>
  );
};

export default RegMenu;
