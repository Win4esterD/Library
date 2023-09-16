import './footer.scss';

const Footer = () => {
    return(
      <footer>
        <div className="aligner">
          <div className="footer__top-side">
            <div className="footer__adress-and-socials">
              <a className="footer_adress" href="https://www.google.com/maps/place/286+Cadman+Plaza+W,+Brooklyn,+NY+11201,+USA/@40.6952685,-73.9916289,19z/data=!4m6!3m5!1s0x89c25a49b649b8c3:0x6342a2291cea2e!8m2!3d40.6956458!4d-73.9912976!16s%2Fg%2F11s2lgz8ns?entry=ttu">286 Cadman Plaza, New York, NY 11238, United States</a>
              <ul className="footer__socials">
                <li className="footer__li">
                  <a href="https://twitter.com/BKLYNlibrary">
                    <img src="./assets/img/icons/twitter.svg" alt="twitter"/>
                  </a>
                </li>
                <li className="footer__li">
                  <a href="https://www.instagram.com/explore/locations/933341957/brooklyn-heights-library/">
                    <img src="./assets/img/icons/instagram.svg" alt="instagram"/>
                  </a>
                </li>
                <li className="footer__li">
                  <a href="https://www.facebook.com/BrooklynHeightsLibrary/">
                    <img src="./assets/img/icons/facebook.svg" alt="facebook"/>
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer__timetables">
              <p className="footer__timetable">Mon - Fri</p>
              <p className="footer__timetable-work footer__timetable">
                 08:00 am - 07:00 pm
              </p>
              <p className="footer__timetable">Sat - Sun</p>
              <p className="footer__timetable-weekend footer__timetable">
                10:00 am - 06:00 pm
              </p>
            </div>
          </div>
        </div>
        <div className="aligner footer__downside-aligner">
          <hr className="footer__hr"/>
        </div>
        <div className="footer__downside">
              <p className="footer__year">2023</p>
              <a href="https://rs.school/js-stage0/" className="footer__school">The Rolling Scopes School</a>
              <a href="https://github.com/Win4esterD/" className="footer__github">Win4esterD</a>
          </div>
      </footer>
    )
}

export default Footer;