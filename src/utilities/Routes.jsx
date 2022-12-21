import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainPage from './MainPage'
import PicSome from '../pages/PicSome/PicSome'
import Cart from '../pages/Cart/Cart'

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainPage />,
      children: [
        {
          path: '/',
          element: <PicSome />
        },
        {
          path: '/cart',
          element: <Cart />
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router}>Routes</RouterProvider>
  )
}

export default Routes