import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import About from './Components/About/About.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Users from './Components/Users/Users.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path:"/About",
        element: <About></About>
      },
      {
        path:"/Contact",
        element:<Contact></Contact>
      },
      {
        path:"/Footer",
        element:<Footer></Footer>
      },
      {
        path:"/Users",
        loader:() => fetch('https://jsonplaceholder.typicode.com/users'),
        element:<Users></Users>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
