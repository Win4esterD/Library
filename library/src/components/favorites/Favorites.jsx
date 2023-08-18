import './favorites.scss';
import booksCollections from './seasons.json';
import { useState, useRef } from 'react';


const Favorites = () => {
  const [season, setSeason] = useState('winter');
  const [seasonSelected, setSeasonSelected] = useState('winter');
  const selecterCircleId = 'favorites__radio-label_checked';
  const customRadioId = "custom-radio_active";
  const timeout = 300;
  const booksSection = useRef(5);

  function determineSelectedCircle(seasonValue){
    if (seasonValue === seasonSelected) {
      return selecterCircleId;
    } else {
      return undefined;
    }
  }

  function fadeInAndOutAnimation(timeout, season) {
    booksSection.current.style.opacity = "0";
    setTimeout(() => {
      setTimeout(() => {
        setSeason(season);
        booksSection.current.style.opacity = "1";
      }, timeout);
    }, timeout);
  }
  
    return (
      <section className="favorites" id="favorites">
        <h2 className="favorites__header section-header">Favorites</h2>
        <img
          className="separation-line favorites__separation-line"
          src="./assets/img/icons/line.svg"
          alt="separation line"
        />
        <p className="favorites__pick">Pick favorites of season</p>
        <div className="aligner seasons-aligner">
          <div className="favorites__seasons">
            <div className="favorites__button-wrapper">
              <input
                className="favorites__radio"
                defaultChecked
                type="radio"
                name="season"
                id="winter-button"
                onClick={() => {
                  setSeasonSelected("winter");
                  fadeInAndOutAnimation(timeout, "winter");
                }}
              />

              <img
                className="custom-radio"
                id={seasonSelected === "winter" ? customRadioId : undefined}
                src="./assets/img/icons/checked.svg"
                alt=""
              />

              <label
                className="favorites__radio-label"
                id={determineSelectedCircle("winter")}
                htmlFor="winter-button"
              >
                Winter
              </label>
            </div>

            <div className="favorites__button-wrapper">
              <input
                className="favorites__radio"
                type="radio"
                name="season"
                id="spring-button"
                onClick={() => {
                  setSeasonSelected("spring");
                  fadeInAndOutAnimation(timeout, "spring");
                }}
              />

              <img
                className="custom-radio"
                src="./assets/img/icons/checked.svg"
                alt=""
                id={seasonSelected === "spring" ? customRadioId : undefined}
              />

              <label
                className="favorites__radio-label"
                id={determineSelectedCircle("spring")}
                htmlFor="spring-button"
              >
                Spring
              </label>
            </div>

            <div className="favorites__button-wrapper">
              <input
                className="favorites__radio"
                type="radio"
                name="season"
                id="summer-button"
                onClick={() => {
                  setSeasonSelected("summer");
                  fadeInAndOutAnimation(timeout, "summer");
                }}
              />
              <img
                className="custom-radio"
                src="./assets/img/icons/checked.svg"
                alt=""
                id={seasonSelected === "summer" ? customRadioId : undefined}
              />
              <label
                className="favorites__radio-label"
                id={determineSelectedCircle("summer")}
                htmlFor="summer-button"
              >
                Summer
              </label>
            </div>

            <div className="favorites__button-wrapper">
              <input
                className="favorites__radio"
                type="radio"
                name="season"
                id="autumn-button"
                onClick={() => {
                  setSeasonSelected("autumn");
                  fadeInAndOutAnimation(timeout, "autumn");
                }}
              />

              <img
                className="custom-radio"
                src="./assets/img/icons/checked.svg"
                alt=""
                id={seasonSelected === "autumn" ? customRadioId : undefined}
              />
              <label
                className="favorites__radio-label"
                id={determineSelectedCircle("autumn")}
                htmlFor="autumn-button"
              >
                Autumn
              </label>
            </div>
          </div>
        </div>
        <div className="aligner">
          <div className="books" ref={booksSection}>
            <div className="books__book-block">
              <p className="book_staff">Staff Picks</p>
              <hr className="book__line" />
              <h3 className="book__name">
                {booksCollections[season].book1.bookName}
              </h3>
              <p className="book__author">
                {booksCollections[season].book1.bookAuthor}
              </p>
              <p className="book__review">
                {booksCollections[season].book1.bookReview}
              </p>
              <button className="button book__button">Buy</button>
              <img
                className="book__cover"
                src={booksCollections[season].book1.bookPicture}
                alt="book"
              />
            </div>
            <div className="books__book-block">
              <p className="book_staff">Staff Picks</p>
              <hr className="book__line" />
              <h3 className="book__name">
                {booksCollections[season].book2.bookName}
              </h3>
              <p className="book__author">
                {booksCollections[season].book2.bookAuthor}
              </p>
              <p className="book__review">
                {booksCollections[season].book2.bookReview}
              </p>
              <button className="button book__button">Buy</button>
              <img
                className="book__cover"
                src={booksCollections[season].book2.bookPicture}
                alt="book"
              />
            </div>
            <div className="books__book-block">
              <p className="book_staff">Staff Picks</p>
              <hr className="book__line" />
              <h3 className="book__name">
                {booksCollections[season].book3.bookName}
              </h3>
              <p className="book__author">
                {booksCollections[season].book3.bookAuthor}
              </p>
              <p className="book__review">
                {booksCollections[season].book3.bookReview}
              </p>
              <button className="button book__button">Buy</button>
              <img
                className="book__cover"
                src={booksCollections[season].book3.bookPicture}
                alt="book"
              />
            </div>
            <div className="books__book-block">
              <p className="book_staff">Staff Picks</p>
              <hr className="book__line" />
              <h3 className="book__name">
                {booksCollections[season].book4.bookName}
              </h3>
              <p className="book__author">
                {booksCollections[season].book4.bookAuthor}
              </p>
              <p className="book__review">
                {booksCollections[season].book4.bookReview}
              </p>
              <button
                disabled
                className="button book__button"
                // id="book__button_active"
              >
                Buy
              </button>
              <img
                className="book__cover"
                src={booksCollections[season].book4.bookPicture}
                alt="book"
              />
            </div>
          </div>
        </div>
      </section>
    );
}

export default Favorites;