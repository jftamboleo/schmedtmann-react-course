import Logo from '../components/Logo.jsx'
import { AppNav } from './AppNav'
import styles from './Sidebar.module.css'
import { Outlet, Link } from 'react-router-dom'

export default function Sidebar () {
  return (
    <div className={styles.sidebar}>
      <Link to='/'>
        <Logo />
      </Link>
      <AppNav />

      < Outlet />

      <footer className={styles.footer}>
        <p>&copy; Copyright {new Date().getFullYear()} WorldWise Inc.</p>
      </footer>
    </div>
  )
}
