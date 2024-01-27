import './App.css'
import Header from './component/Header'
import Body from './component/Body'
import Footer from './component/Footer'
import { Outlet  , Link} from 'react-router-dom'


function App() {

  return (
    <>
      <Header/>
      {/* <Body/> , <About/> <Contact/>   children of App and all of this store 
      in outlet , if our path is "/" so outlet giv a body component 
      , if our path is "/about" so ouutlet give us a about page,
      and sane for contact  */}
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
