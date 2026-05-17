import { NavLink } from 'react-router'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <NavLink to="/" className={`${styles.logo}`}>
      <span className='bruno-ace-regular'>FC43</span>
      </NavLink>
      <div className={styles.links}>
        <NavLink to="/" end className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}>Inicio</NavLink>
        <NavLink to="/history" className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}>Historia</NavLink>
        <NavLink to="/f1-2026" className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}>2026</NavLink>
        <NavLink to="/f1-2025" className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}>2025/24</NavLink>
      </div>
    </nav>
  )
}