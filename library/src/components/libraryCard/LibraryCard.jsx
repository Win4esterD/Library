import "./libraryCard.scss";
import { useContext, useRef } from "react";
import { regMenuContext } from "../../context/regMenuContext";

const LibraryCard = () => {
  const {
    setSignUpWindow,
    setRegMenu,
    authorisedUser,
    setAuthorisedUser,
    isAuth,
  } = useContext(regMenuContext);
  const readerField = useRef(15);
  const cardField = useRef(16);

  const cardCheckHandler = () => {
    const reader = readerField.current.value.split(" ");
    const card = cardField.current.value;
    for (let key in localStorage) {
      if (
        localStorage.getItem(key) &&
        localStorage.getItem(key) !== null &&
        JSON.parse(localStorage.getItem(key))
      ) {
        const user = JSON.parse(localStorage.getItem(key));
        if (
          user.firstName === reader[0] &&
          user.lastName === reader[1] &&
          user.cardNumber === card
        ) {
          setAuthorisedUser(user);
          setTimeout(() => {
            readerField.current.value = "";
            cardField.current.value = "";
            setAuthorisedUser("");
          }, 10000);
        }
      }
    }
  };
  return (
    <section className="library-card" id="library-card">
      <h2 className="section-header library-card__header">
        Digital Library Cards
      </h2>
      <img
        className="separation-line library-card__separation-line"
        src="./assets/img/icons/line.svg"
        alt="line"
      />
      <div className="aligner library-card__aligner">
        <div className="form-block">
          <h3 className="form-block__header">
            {isAuth ? "Your Library card" : "Find your Library card"}
          </h3>
          <div className="form-border">
            <form
              action="#"
              className="library-form"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="library-form__inputs">
                <p className="library-form__description">
                  Brooklyn Public Library
                </p>
                <input
                  defaultValue={
                    !isAuth
                      ? ""
                      : `${authorisedUser.firstName} ${authorisedUser.lastName}`
                  }
                  className="library-form__input"
                  type="text"
                  placeholder={
                    !isAuth
                      ? "Reader's name"
                      : `${authorisedUser.firstName} ${authorisedUser.lastName}`
                  }
                  ref={readerField}
                />
                <input
                  defaultValue={!isAuth ? "" : authorisedUser.cardNumber}
                  className="library-form__input"
                  type="text"
                  placeholder={
                    !isAuth ? "Card number" : authorisedUser.cardNumber
                  }
                  ref={cardField}
                />
              </div>
              <button
                className="library-form__button"
                style={{ display: authorisedUser ? "none" : "inline" }}
                onClick={cardCheckHandler}
              >
                Check the card
              </button>
              <div
                className="library-form__user-metrics"
                style={{ display: authorisedUser ? "flex" : "none" }}
              >
                <div className="library-form__metric-wrapper">
                  <p className="library-form__metric-name">Visits</p>
                  <img
                    src="./assets/img/icons/visits.svg"
                    alt="visits"
                    width="20px"
                    height="21px"
                    className="library-form__metric-img"
                  />
                  <p className="library-form__metric">
                    {authorisedUser ? authorisedUser.visits : ""}
                  </p>
                </div>
                <div className="library-form__metric-wrapper">
                  <p className="library-form__metric-name">Bonuses</p>
                  <img
                    src="./assets/img/icons/bonuses.svg"
                    alt="bonuses"
                    width="20px"
                    height="21px"
                    className="library-form__metric-img"
                  />
                  <p className="library-form__metric">
                    {authorisedUser ? authorisedUser.bonuses : ""}
                  </p>
                </div>
                <div className="library-form__metric-wrapper">
                  <p className="library-form__metric-name">Books</p>
                  <img
                    src="./assets/img/icons/book.svg"
                    alt="books"
                    width="20px"
                    height="21px"
                    className="library-form__metric-img"
                  />
                  <p className="library-form__metric">
                    {authorisedUser ? authorisedUser.books.length : ""}
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="get-card">
          <p className="get-card__call-to-action">
            {!isAuth ? "Get a reader card" : "Visit your profile"}
          </p>
          <p className="get-card__description">
            {!isAuth
              ? "You will be able to see a reader card after logging into account or you can register a new account"
              : "With a digital library card you get free access to the Library’s wide array of digital resources including e-books, databases, educational resources, and more."}
          </p>
          <div className="get-card__buttons">
            <button
              style={{ display: isAuth ? "none" : "block" }}
              className="get-card__button"
              onClick={() => {
                setSignUpWindow("Register");
                setRegMenu("flex");
              }}
            >
              Sign Up
            </button>
            <button
              style={{ display: isAuth ? "none" : "block" }}
              className="get-card__button"
              onClick={() => {
                setSignUpWindow("Log In");
                setRegMenu("flex");
              }}
            >
              Log in
            </button>
            <button
              style={{ display: !isAuth ? "none" : "block" }}
              className="get-card__button"
              onClick={() => {
                setSignUpWindow("My profile");
                setRegMenu("flex");
              }}
            >
              Profile
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LibraryCard;
