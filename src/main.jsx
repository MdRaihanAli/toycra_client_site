import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layput/Main.jsx';
import Home from './pages/home/home/Home.jsx';
import VeiwDetails from './pages/others/VeiwDetails';
import AddToy from './pages/others/AddToy';
import AllToy from './pages/others/AllToy';
import Login from './pages/others/Login';
import Authprovider from './authprovidr/Authprovider';
import MyToy from './pages/others/MyToy';
import PrivetRoute from './privetRoute/PrivetRoute';
import Rejister from './pages/others/Rejister';
import ErrorPase from './pages/sheare/ErrorPase';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'viewdetails/:id',
        element: <PrivetRoute><VeiwDetails></VeiwDetails></PrivetRoute>,
        loader: ({ params }) => fetch(`https://toycra-server-side-mdraihanali.vercel.app/viewdetails/${params.id}`)
      },
      {
        path: 'addtoy',
        element: <AddToy></AddToy>
      },
      {
        path: 'alltoy',
        element: <AllToy></AllToy>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'rejister',
        element: <Rejister></Rejister>
      },
      {
        path: 'mytoy',
        element: <PrivetRoute><MyToy></MyToy></PrivetRoute>
      },
      // {
      //   path:'*',
      //   element:<ErrorPase></ErrorPase>
      // }
      

    ]
  },
  {
    path:'*',
    element:<ErrorPase></ErrorPase>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>
      <RouterProvider router={router} />
    </Authprovider>
  </React.StrictMode>,
)
