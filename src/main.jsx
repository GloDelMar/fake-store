import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import { Toaster } from 'sonner'
import ProductsPage from './pages/ProductsPage'
import PorductDetailPage from './pages/ProductDetailPage'

import MainLayout from './layouts/MainLayout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout/>,
    children:[
      {
        path: "/",
        element: <HomePage/>
      },
      {
        path: '/productos',
        element: <ProductsPage />
      },
      {
        path: '/productos/:id',
        element: <PorductDetailPage />
      }
    ]
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
<>
<Toaster />
<RouterProvider router={router} />
</>
)