import React from "react"
import ReactDOM from "react-dom/client"
import { createHashRouter, RouterProvider } from "react-router-dom"
import { Provider } from "react-redux"
import App from "./App.jsx"
import { store } from "./redux/store.js"
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById("root"))
const router = createHashRouter([
  {
    path: "/*",
    element: (
      <Provider store={store}>
        <App />
      </Provider>
    ),
  },
])
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
