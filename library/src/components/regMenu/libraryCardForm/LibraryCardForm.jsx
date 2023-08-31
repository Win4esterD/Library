import React from "react";
import "./libraryCardForm.scss";

const LibraryCardForm = ({ setRegMenu }) => {
  return (
    <div className="library-card-window" onClick={(e) => e.stopPropagation()}>
      <header className="library-card-window__head">
        <h3 className="library-card-window__header">BUY A LIBRARY CARD</h3>
        <img
          className="library-card-window__close"
          src="./assets/img/icons/close_btn.svg"
          alt="close button"
          onClick={() => setRegMenu("none")}
        />
      </header>
      <div className="library-card-window__desc-wrapper">
        <form
          action="#"
          className="library-card-form"
          onSubmit={(e) => e.preventDefault()}
        >
          <label className="library-card-form__label" htmlFor="bank-card">
            Bank card number
          </label>
          <input
            className="library-card-form__input"
            type="text"
            pattern="[0-9]+"
            minlength="16"
            maxlength="16"
            size="16"
            name="bank-card"
            required
          />
          <label className="library-card-form__label" htmlFor="">
            Expiration code
          </label>
          <div className="library-card-form__card-data-wrapper">
            <input
              required
              className="library-card-form__input library-card-form__card-init-data"
              type="text"
              minlength="2"
              maxlength="2"
              pattern="[0-9]+"
            />
            <input
              required
              className="library-card-form__input library-card-form__card-init-data"
              type="text"
              minlength="2"
              maxlength="2"
              pattern="[0-9]+"
            />
          </div>
          <label className="library-card-form__label" htmlFor="cvc">
            CVC
          </label>
          <input
            required
            className="library-card-form__input library-card-form__card-init-data"
            type="text"
            name="cvc"
            minlength="3"
            maxlength="3"
            pattern="[0-9]+"
          />
          <label
            className="library-card-form__label library-card-form__cardholder-name"
            htmlFor="card-holder"
          >
            Cardholder name
          </label>
          <input
            required
            className="library-card-form__input"
            type="text"
            name="card-holder"
          />
          <label className="library-card-form__label" htmlFor="postal-code">
            Postal code
          </label>
          <input
            required
            type="text"
            name="postal-code"
            className="library-card-form__input"
          />
          <label className="library-card-form__label" htmlFor="city">
            City / Town
          </label>
          <input
            type="text"
            name="city"
            className="library-card-form__input"
            required
          />
          <div className="library-card-form__button-and-price">
            <button className="button">Buy</button>
            <p className="library-card-form__price">$ 25.00</p>
          </div>
        </form>
        <div className="library-card-window__text-block">
          <p className="library-card-window__text">
            If you are live, work, attend school, or pay property taxes in New
            York State, you can get a $25 digital library card right now using
            this online form. Visitors to New York State can also use this form
            to apply for a temporary card.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LibraryCardForm;
