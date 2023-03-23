import "./App.css";
import logo from "./images/logo.svg";
import footerLogo from "./images/footer-logo.svg";
import fone from "./images/image-mockups.png";
import plane from "./images/image-plane.jpg";
import menu from "./images/icon-hamburger.svg";
import budget from "./images/icon-budgeting.svg";
import utube from "./images/icon-youtube.svg";
import cash from "./images/image-currency.jpg";
import resturant from "./images/image-restaurant.jpg";
import twitter from "./images/icon-twitter.svg";
import online from "./images/icon-online.svg";
import onboard from "./images/icon-onboarding.svg";
import api from "./images/icon-api.svg";
import fetti from "./images/image-confetti.jpg";
import pin from "./images/icon-pinterest.svg";
import fb from "./images/icon-facebook.svg";
import insta from "./images/icon-instagram.svg";
import close from "./images/icon-close.svg";
import { useState } from "react";

function App() {
  const [showmenu, setShowMenu] = useState(false);
  return (
    <div className="App">
      <nav>
        <div className="container nav-container">
          <img src={logo} alt="logo" />
          <ul className={`${showmenu ? "links-show" : "nav-links"}`}>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Blog</li>
            <li>Careers</li>
          </ul>
          <button>request</button>
          {showmenu ? (
            <img className="menu" src={close} alt="menu" onClick={() => setShowMenu(false)} />
          ) : (
            <img className="menu" src={menu} alt="menu" onClick={() => setShowMenu(true)} />
          )}
        </div>
      </nav>
      <main>
        <div className={showmenu ? "dark-overlay" : "no-overlay"}></div>
        <header>
          <div className=" header-container">
            <div className="header-left">
              <h1>Next generation digital banking</h1>
              <p>
                Take your financial life online. Your Easybank account will be one step shop for
                spending. saving,budgeting,investing and more
              </p>
              <button>request</button>
            </div>
            <div className="header-right">
              <img src={fone} alt="logo" />
            </div>
          </div>
        </header>
        <section className="service">
          <div className="container services-container">
            <div>
              <h1>why choose Easybank?</h1>
              <p>
                mauris sit amet massa vitae tortor condimentum lacinia quis vel eros donec ac odio
                tempor orci dapibus ultrices in iaculis
              </p>
            </div>
            <div className="services">
              <div>
                <img src={online} alt="logo" />
                <h3>online Banking</h3>
                <p>
                  enim ut tellus elementum sagittis vitae et leo duis ut diam quam nulla porttitor
                  massa id neque aliquam vestibulum morbi blandit cursus
                </p>
              </div>
              <div>
                <img src={budget} alt="logo" />
                <h3>simple Budgeting</h3>
                <p>
                  enim ut tellus elementum sagittis vitae et leo duis ut diam quam nulla porttitor
                  massa id neque aliquam vestibulum morbi blandit cursus
                </p>
              </div>
              <div>
                <img src={onboard} alt="logo" />
                <h3>Fast onboarding</h3>
                <p>
                  enim ut tellus elementum sagittis vitae et leo duis ut diam quam nulla porttitor
                  massa id neque aliquam vestibulum morbi blandit cursus
                </p>
              </div>
              <div>
                <img src={api} alt="logo" />
                <h3>Open Api</h3>
                <p>
                  enim ut tellus elementum sagittis vitae et leo duis ut diam quam nulla porttitor
                  massa id neque aliquam vestibulum morbi blandit cursus
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="article">
          <div className="container articles-container">
            <h1>Latest Articles</h1>
            <div className="articles">
              <div>
                <img src={cash} alt="logo" />
                <div>
                  <p>porttitor</p>
                  <h2>mauris sit amet massa vitae tortor condimentum</h2>
                  <p>
                    enim ut tellus elementum sagittis vitae et leo duis ut diam quam nulla porttitor
                    massa id neque aliquam vestibulum morbi blandit cursus
                  </p>
                </div>
              </div>
              <div>
                <img src={resturant} alt="logo" />
                <div>
                  <p>porttitor</p>
                  <h2>mauris sit amet massa vitae tortor condimentum</h2>
                  <p>
                    enim ut tellus elementum sagittis vitae et leo duis ut diam quam nulla porttitor
                    massa id neque aliquam vestibulum morbi blandit cursus
                  </p>
                </div>
              </div>
              <div>
                <img src={plane} alt="logo" />
                <div>
                  <p>porttitor</p>
                  <h2>mauris sit amet massa vitae tortor condimentum</h2>
                  <p>
                    enim ut tellus elementum sagittis vitae et leo duis ut diam quam nulla porttitor
                    massa id neque aliquam vestibulum morbi blandit cursus
                  </p>
                </div>
              </div>
              <div>
                <img src={fetti} alt="logo" />
                <div>
                  <p>porttitor</p>
                  <h2>mauris sit amet massa vitae tortor condimentum</h2>
                  <p>
                    enim ut tellus elementum sagittis vitae et leo duis ut diam quam nulla porttitor
                    massa id neque aliquam vestibulum morbi blandit cursus
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer>
          <div className="container footer-container">
            <div className="footer-left">
              <div>
                <img className="f-logo" src={footerLogo} alt="logo" />
                <div>
                  <img src={fb} alt="logo" />
                  <img src={utube} alt="logo" />
                  <img src={twitter} alt="logo" />
                  <img src={pin} alt="logo" />
                  <img src={insta} alt="logo" />
                </div>
              </div>
              <ul>
                <li>About us</li>
                <li>Contact</li>
                <li>Blog</li>
              </ul>
              <ul>
                <li>Careers</li>
                <li>Support</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <button>Request</button>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
