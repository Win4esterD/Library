import {React, useRef} from "react";
import "./userProfile.scss";

const UserProfile = ({ authorisedUser, setRegMenu }) => {
  const cardNumber = useRef("13");
  return (
    <div className="profile-window" onClick={(e) => e.stopPropagation()}>
      <div className="profile-window__avatar-area">
        <div className="profile-window__avatar-wrapper">
          <div className="profile-window__avatar">
            {authorisedUser
              ? authorisedUser.firstName[0].toUpperCase() +
                authorisedUser.lastName[0].toUpperCase()
              : ""}
          </div>
          <div className="profile-window__full-name-wrapper">
            <p className="profile-window__full-name">
              {authorisedUser.firstName + " " + authorisedUser.lastName}
            </p>
          </div>
        </div>
      </div>
      <div className="profile-window__info">
        <img
          className="profile-window__close"
          src="./assets/img/icons/close_btn.svg"
          alt="close"
          onClick={() => setRegMenu("none")}
        />
        <h3 className="profile-window__header">MY PROFILE</h3>
        <div className="profile-window__stats-wrapper">
          <div className="profile-window__stats">
            <p className="profile-window__metrics">Visits</p>
            <img
              src="./assets/img/icons/visits.svg"
              alt="visits"
              className="profile-window__metric-icons"
              width="20px"
              height="21px"
            />
            <p className="profile-window__counter">{authorisedUser.visits}</p>
          </div>
          <div className="profile-window__stats">
            <p className="profile-window__metrics">Bonuses</p>
            <img
              src="./assets/img/icons/bonuses.svg"
              alt="bonuses"
              className="profile-window__metric-icons"
              width="20px"
              height="21px"
            />
            <p className="profile-window__counter">{authorisedUser.bonuses}</p>
          </div>
          <div className="profile-window__stats">
            <p className="profile-window__metrics">Books</p>
            <img
              src="./assets/img/icons/book.svg"
              alt="books"
              className="profile-window__metric-icons"
              width="20px"
              height="21px"
            />
            <p className="profile-window__counter">
              {authorisedUser ? authorisedUser.books.length : "0"}
            </p>
          </div>
        </div>
        <p className="profile-window__rented-books-header">Rented books</p>
        <ul className="profile-window__rented-books">
          {authorisedUser? authorisedUser.books.map((item, index) => {
            return (
              <li className="profile-window__book-name" key={index}>
                {item}
              </li>
            );
          }): ''}
        </ul>
        <div className="profile-window__card-wrapper">
          <p className="profile-window__card-number">Card number</p>
          <p className="profile-window__number" ref={cardNumber}>
            {authorisedUser.cardNumber}
          </p>
          <img
            src="./assets/img/icons/icon-copy.svg"
            alt="copy"
            className="copy-icon profile-window__copy-icon"
            width="13.31px"
            height="12px"
            onClick={() => {
              navigator.clipboard.writeText(cardNumber.current.innerText);
              alert("Card number copied");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
