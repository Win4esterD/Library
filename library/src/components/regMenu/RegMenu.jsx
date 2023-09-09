import React from "react";
import "./regMenu.scss";
import { regMenuContext } from "../../context/regMenuContext";
import { useContext, useRef } from "react";
import UserProfile from "./userProfile/userProfile";
import LibraryCardForm from "./libraryCardForm/LibraryCardForm";

const RegMenu = () => {
  const {
    regMenu,
    setRegMenu,
    SignUpWindow,
    setSignUpWindow,
    setIsAuth,
    authorisedUser,
    setAuthorisedUser,
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
    const cardNumberLength = 9;

    for (let i = 0; i < cardNumberLength; i++) {
      number += getRandomIntInclusive(0, 15).toString("16").toUpperCase();
    }

    return number;
  }

  //Register menu, where a user can register
  const registerMenu = () => {
    return (
      <>
        <img
          className="reg-window__close"
          src="./assets/img/icons/close_btn.svg"
          alt="close button"
          onClick={() => setRegMenu("none")}
        />
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
                visits: 1,
                bonuses: 0,
                books: [],
                libraryCard: false,
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
    const email = regEmail.current.value;
    const password = regPass.current.value;
    const parsedJSON = JSON.parse(localStorage.getItem(email));

    if (email in localStorage && parsedJSON.password === password) {
      parsedJSON.authorised = true;
      parsedJSON.visits += 1;
      localStorage.setItem(email, JSON.stringify(parsedJSON));
      setAuthorisedUser(parsedJSON);
      setIsAuth(true);
      setRegMenu("none");
    } else if (!(email in localStorage)) {
      for (let item in localStorage) {
        if (
          localStorage.getItem(item) !== null &&
          JSON.parse(localStorage.getItem(item)).cardNumber === email &&
          JSON.parse(localStorage.getItem(item)).password === password
        ) {
          const user = JSON.parse(localStorage.getItem(item));
          user["authorised"] = true;
          user['visits'] += 1;
          localStorage.setItem(user.email, JSON.stringify(user));
          setAuthorisedUser(user);
          setIsAuth(true);
          setRegMenu("none");
        }
      }
    }
  };

  const logInMenu = () => {
    return (
      <>
        <img
          className="reg-window__close"
          src="./assets/img/icons/close_btn.svg"
          alt="close button"
          onClick={() => setRegMenu("none")}
        />
        <h3 className="reg-window__header">Login</h3>
        <form
          className="reg-window__form"
          onSubmit={(event) => {
            event.preventDefault();
            logIn();
          }}
        >
          <label className="reg-window__field-name" htmlFor="name">
            E-mail or readers card
          </label>
          <input
            className="reg-window__input-field"
            type="text"
            name="name"
            required
            ref={regEmail}
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
            ref={regPass}
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
        {/* <img
          className="reg-window__close"
          src="./assets/img/icons/close_btn.svg"
          alt="close button"
          onClick={() => setRegMenu("none")}
        /> */}
        {menus[SignUpWindow]}
      </div>
      {SignUpWindow === "My profile" ? (
        <UserProfile authorisedUser={authorisedUser} setRegMenu={setRegMenu} />
      ) : (
        ""
      )}
      {SignUpWindow === "Get card" ? (
        <LibraryCardForm authorisedUser={authorisedUser} setRegMenu={setRegMenu} />
      ) : (
        ""
      )}
    </div>
  );
};

export default RegMenu;
