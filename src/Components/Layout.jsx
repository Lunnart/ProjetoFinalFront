import Header from './Header/Header.jsx'
import Footer from './Footer/Footer.jsx'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer/>
    </div>
        )
      }
        export default Layout







