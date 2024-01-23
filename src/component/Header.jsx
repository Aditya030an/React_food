const Tittle = () => {
  return (
    <>
      <h1>Food Villa</h1>
    </>
  );
};

const Header = () => {
  return (
    <>
      <div className="Header">
        <div className="logo">
          <img className="logo-img" src="../img/foodlogo.png" />
          <Tittle />
        </div>
        <div className="nev-item">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contect</li>
                <li>Card</li>
                <li>Offer</li>
            </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
