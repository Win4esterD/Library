import React from 'react';
import './regMenu.scss';

const RegMenu = () => {
  return (
    <div className="dark">
      <div className="reg-window">
        <img
          className="reg-window__close"
          src="./assets/img/icons/close_btn.svg"
          alt="close button"
        />
        <h3 className="reg-window__header">REGISTER</h3>
        <form
          className="reg-window__form"
          action="#"
          onSubmit={(event) => event.preventDefault()}
        >
          <label className="reg-window__field-name" for="name">
            First name
          </label>
          <input
            className="reg-window__input-field"
            type="text"
            name="name"
          ></input>
          <label className="reg-window__field-name" for="name">
            Last name
          </label>
          <input
            className="reg-window__input-field"
            type="text"
            name="last-name"
          ></input>
          <label className="reg-window__field-name" for="name">
            E-mail
          </label>
          <input
            className="reg-window__input-field"
            type="text"
            name="e-mail"
          ></input>
          <label className="reg-window__field-name" for="name">
            Password
          </label>
          <input
            className="reg-window__input-field"
            type="text"
            name="password"
          ></input>
          <button className="button reg-window__button">Sign Up</button>
        </form>
        <div className="reg-window__question-wrapper">
          <p className="reg-window__question">Already have an account?</p>
          <p className="reg-window__action">Login</p>
        </div>
      </div>
    </div>
  );
}

export default RegMenu;
