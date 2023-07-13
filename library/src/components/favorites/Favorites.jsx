import './favorites.scss';
import booksCollections from './seasons.json';


const Favorites = () => {
    return(
      <section className="favorites">
        <h2 className="favorites__header section-header">
          Favorites
        </h2>
        <img className='separation-line favorites__separation-line' src="./assets/img/icons/line.svg" alt="separation line" />
        <p className="favorites__pick">
          Pick favorites of season
        </p>
        <div className="aligner">
          <div className="favorites__seasons">
            <div className="favorites__button-wrapper">
              <input className="favorites__radio" defaultChecked type="radio" name="season" id="winter-button" />
              <label className="favorites__radio-label" id="favorites__radio-label_checked" htmlFor="winter-button">Winter</label>
            </div>

            <div className="favorites__button-wrapper">
              <input className="favorites__radio" type="radio" name="season" id="spring-button" />
              <label className="favorites__radio-label" htmlFor="spring-button">Spring</label>
            </div>

            <div className="favorites__button-wrapper">
              <input className="favorites__radio" type="radio" name="season" id="summer-button" />
              <label className="favorites__radio-label" htmlFor="summer-button">Summer</label>
            </div>

            <div className="favorites__button-wrapper">
              <input className="favorites__radio" type="radio" name="season" id="autumn-button" />
              <label className="favorites__radio-label" htmlFor="autumn-button">Autumn</label>
            </div>
          </div>
        </div>
        <div className="aligner">
          <div className="books">
            <div className="books__book-block">
              <p className="book_staff">Staff Picks</p>
              <hr className="book__line"/>
              <h3 className='book__name'>{booksCollections.autumn.book1.bookName}</h3>
              <p className="book__author">{booksCollections.autumn.book1.bookAuthor}</p>
              <p className="book__review">
              {booksCollections.autumn.book1.bookReview}       
              </p>
              <button className="button book__button">Buy</button>
              <img className="book__cover" src={booksCollections.autumn.book1.bookPicture} alt="book" />
            </div>
            <div className="books__book-block">
              <p className="book_staff">Staff Picks</p>
              <hr className="book__line"/>
              <h3 className='book__name'>{booksCollections.autumn.book2.bookName}</h3>
              <p className="book__author">{booksCollections.autumn.book2.bookAuthor}</p>
              <p className="book__review">
              {booksCollections.autumn.book2.bookReview}       
              </p>
              <button className="button book__button">Buy</button>
              <img className="book__cover" src={booksCollections.autumn.book2.bookPicture} alt="book" />
            </div>
            <div className="books__book-block">
              <p className="book_staff">Staff Picks</p>
              <hr className="book__line"/>
              <h3 className='book__name'>{booksCollections.autumn.book3.bookName}</h3>
              <p className="book__author">{booksCollections.autumn.book3.bookAuthor}</p>
              <p className="book__review">
                {booksCollections.autumn.book3.bookReview}  
              </p>
              <button className="button book__button">Buy</button>
              <img className="book__cover" src={booksCollections.autumn.book3.bookPicture} alt="book" />
            </div>
            <div className="books__book-block">
              <p className="book_staff">Staff Picks</p>
              <hr className="book__line"/>
              <h3 className='book__name'>{booksCollections.autumn.book4.bookName}</h3>
              <p className="book__author">{booksCollections.autumn.book4.bookAuthor}</p>
              <p className="book__review">
              {booksCollections.autumn.book4.bookReview}       
              </p>
              <button className="button book__button" id="book__button_active">Own</button>
              <img className="book__cover" src={booksCollections.autumn.book4.bookPicture} alt="book" />
            </div>
          </div>
        </div>
      </section>
    )
}

export default Favorites;