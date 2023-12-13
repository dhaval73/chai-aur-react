import Footer from "../Footer/Footer.jsx";
import Header from "../Header/Header.jsx"
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
   <Header />
    <Outlet />
   <Footer />
    </>
  )
}

export default Layout   