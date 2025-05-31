import { NavLink } from 'react-router-dom'
import styles from '../styles/CustomNavLink.module.css'

const CustomNavLink = ({ children, parametr, end = false }) => {
  return (
    <NavLink
      className={({ isActive }) => (isActive ? styles.activeLink : '')}
      to={parametr}
      end={end}
    >
      {children}
    </NavLink>
  )
}

export default CustomNavLink
