import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from '../layouts/Layout'
import { Home } from '../pages/Home'
import { NotFound } from '../pages/NotFound'
import { Error } from '../pages/Error'
import { Products } from '../pages/Products'
import { CategoryPage } from '../pages/CategoryPage'
import { Product } from '../pages/Product'
import { Login } from '../components/Login'
import { Register } from '../components/Register'
import { CartPage } from '../pages/CartPage'
import { ResultSearch } from '../pages/ResultSearch'
import { ProtectedRoute } from '../util/Auth'
import { OngPayment } from '../pages/OngPayment'
import { OngPage } from '../pages/OngPage'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />} errorElement={<Error />}>
          <Route index element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/product/:id' element={<Product />} />
          <Route
            path='/products/category/:category'
            element={<CategoryPage />}
          />
          <Route path='/ong-payment' element={<OngPayment />} />
          <Route path='/ong' element={<OngPage />} />
          <Route path='/search' element={<ResultSearch />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />

          <Route
            path='/cart'
            element={
              <ProtectedRoute>
                <CartPage />
              </ProtectedRoute>
            }
          />

          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
