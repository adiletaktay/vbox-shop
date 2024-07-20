import React, { Suspense } from "react"
import { Routes, Route } from "react-router-dom"
import { Home } from "./Home"
import { MainLayout } from "./MainLayout"

import "./App.scss"

const Cart = React.lazy(() => import("./Cart").then(({ Cart }) => ({ default: Cart })))
const NotFound = React.lazy(() => import("./NotFound").then(({ NotFound }) => ({ default: NotFound })))

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="vbox-shop" element={<Home />} />
        <Route
          path="vbox-shop/Cart"
          element={
            <Suspense fallback={<div>Идёт загрузка корзины ...</div>}>
              <Cart />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<div>Идёт загрузка ...</div>}>
              <NotFound />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  )
}

export default App
