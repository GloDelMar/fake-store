import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import { Toaster } from 'sonner'
import ProductsPage from './pages/ProductsPage'
import PorductDetailPage from './pages/ProductDetailPage'
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/productos',
    element: <ProductsPage />
  },
  {
    path: '/productos/:id',
    element: <PorductDetailPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
<>
<Toaster />
<RouterProvider router={router} />
</>
)