import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import About from './component/About.jsx'
import Contact from './component/Contact.jsx'
import Body from './component/Body.jsx'
import Error from './component/Error.jsx'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import RestaruntMenu from './component/RestaurentMenu.jsx'
import Profile from './component/Profile.jsx'

const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    errorElement:<Error/>,
    children:[
      //path of all childern in App Body  about , contact
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/about",  //this will go to localhost:1234/about
        element:<About/>,
        children:[{ //every time use outlet for routing children , in parent component 
          path:"profile",  //this will go to localhost:1234/about/profile   if i use /profile it will be rout through root  , so donot use /
          element:<Profile name={"ABC"}/>
        }]
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/restaurants/:restId",
        element:<RestaruntMenu/>
      }
    ]
  },
  // {
  //   path:'/about',
  //   element:<About/>,
  //   errorElement:<Error/>
  // },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter} />
)
