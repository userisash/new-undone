import React from 'react';
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';
import Homepage from './components/HomePage';
import Products from './components/Products';
import { RootLayout } from './RootLayout';
import Header from './components/Header';
import ProductDetail from './components/ProductDetails';


function App() {
const router = createBrowserRouter([
  {
    path:"/",
    element: <RootLayout/>,
    children:[
      {
        path:"/",
        element: <Homepage/>
      },
      {
        path:"/products",
        element:<Products/>
      },
      {
        path:"/products/:id",
        element:<ProductDetail/>
      },
      // {
      //   path:"*",
      //   element:<{() => <h1>404 Page Not Found</h1>}
      // }
    ]
  },
])


  return (
    <RouterProvider router={router}/>
  );
}

export default App;
