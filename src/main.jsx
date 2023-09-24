import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import MainPage from './Pages/MainPage/MainPage';
import Home from './Pages/Home/Home';
import Donation from './Pages/Donation/Donation';
import Statistics from './Pages/Statistics/Statistics';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import DonationsDetails from './components/Donations/DonationsDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage></MainPage>,
    errorElement: <ErrorPage></ErrorPage>,
    children : [
      {
        path : '/',
        element: <Home></Home>,
        loader: () => fetch('/donation.json')
      },
      {
        path : '/donation',
        element: <Donation></Donation>
      },
      {
        path : '/statistics',
        element :<Statistics></Statistics>
      },
      {
        path : '/donations/:id',
        element: <DonationsDetails></DonationsDetails> ,
        loader: () => fetch('/donation.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
