import { Outlet } from "react-router-dom"
import { Header } from "./Header"

export const MainLayout = () => {
  return (
    <div className="container">
      <Header />
      <div className="content">
        <Outlet />
      </div>
    </div>
  )
}
