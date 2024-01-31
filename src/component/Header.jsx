import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import store from "../utils/store";
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

  //useselector use to use a selector
  // const  cartItems = useSelector(store=>store); //mere sare slice ayege
  // const  cartItems = useSelector(store=>store.cart); //isme perticuler slice ayega namae of silce cart
  const cartItems = useSelector((store) => store.cart.item); //isme cart slice ke item[empty arry]
  console.log(cartItems);

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
            <Link to="/cart">
              {/* <li>Cart - {cartItems.length}-item</li> */}
              {cartItems.length > 0 ? <li>Cart - {cartItems.length}:item</li> : <li>cart</li>}
            </Link>
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
