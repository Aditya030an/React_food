import { useState } from "react";
import { Link } from "react-router-dom";
// const loguser = () => {
//   return true;
// };

const Tittle = () => {
  return (
    <>
      <h1>Food Villa</h1>
    </>
  );
};

const Header = () => {
  const [isLoggedin, setisLoggedin] = useState(false);
  return (
    <>
      <div className="Header">
        <div className="logo">
          <img className="logo-img" src="../img/foodlogo.png" />
          <Tittle />
        </div>
        <div className="nev-item">
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/contact">
              <li>Contact</li>
            </Link>
            <Link to="/instamart">
              <li>Instamart</li>
            </Link>
            <li>Card</li>
            <li>Offer</li>
            {isLoggedin ? (
              <li>
                <button onClick={() => setisLoggedin(false)}>Logout</button>
              </li>
            ) : (
              <li>
                <button onClick={() => setisLoggedin(true)}>Login</button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
