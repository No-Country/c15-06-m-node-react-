import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '../layouts/Layout'
import { Home } from '../pages/Home'
import { NotFound } from '../pages/NotFound'
import { Error } from '../pages/Error'
import { Products } from '../pages/Products'
import { CategoryPage } from '../pages/CategoryPage'
import { Product } from '../pages/Product'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        path: '/',
        element: <Home />,
        errorElement: <Error />,
      },
      {
        path: '/products',
        element: <Products />,
        errorElement: <Error />,
      },
      {
        path: '/product/:id',
        element: <Product />,
        errorElement: <Error />,
      },
      {
        path: '/products/category/:category',
        element: <CategoryPage />,
        errorElement: <Error />,
      },
      {
        path: '*',
        element: <NotFound />,
        errorElement: <Error />,
      },
    ],
  },
])
