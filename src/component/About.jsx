// import Header from "./Header";    this is the one way but react dom give a library called outlet

import { Link, Outlet } from "react-router-dom";

const About = () => {
  return (
    <>
      <div>
        <h1>About My App</h1>
        <p>
          This is the food delivery app, You can deliver a food by this app{" "}
        </p>
      </div>
      <Link to="profile"><h1>Profile</h1></Link> 
      <Outlet/>
    </>
  );
};

export default About;
