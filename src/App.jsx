import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <h1 className="text-4xl font-bold border-2 border-rose-600 text-center bg-gradient-to-tr from-cyan-500 to-blue-500 h-30 rounded-3xl cursor-pointer">
        This is a food detail app
      </h1>
      <Header />
      {/* <Body/> , <About/> <Contact/>   children of App and all of this store 
      in outlet , if our path is "/" so outlet giv a body component 
      , if our path is "/about" so ouutlet give us a about page,
      and sane for contact  */}
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
