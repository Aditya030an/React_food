// import Header from "./Header";    this is the one way but react dom give a library called outlet

import { Link, Outlet } from "react-router-dom";
import Profile from "./ProfileClass";
import ProfileFunction from "./Profile";
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

      {/* Function base component */}
      <ProfileFunction name={"Profile Function"}/>
      {/* class base component */}
      <Profile name={"ABC"}/>
    </>
  );
};

export default About;
