import React from 'react'
import Link from 'gatsby-link'
import styles from './Header.module.css'
import logo from '../assets/logo.svg'

const Header = () => (
  <div
    style={{
      marginTop: '2em',
      marginBottom: '2rem',
    }}
  >
    <div
      className={styles.container}
      style={{
        display: 'flex',
        margin: '0 auto',
        flexFlow: 'row wrap',
        maxWidth: 1200,
        justifyContent: 'space-between',
        padding: '0 55px',
      }}
    >
      <div className={styles.logoContainer}>
        <img src={logo}/>
      </div>

      <nav style={{
        width: '50%',
      }}>
        <ul style={{
          listStyle: 'none',
          marginLeft: 0,
          width: '100%',
          display: 'flex',
          flexFlow: 'row wrap',
          justifyContent: 'space-between',
        }}>
          <li className={styles.li}><Link to='/'>Platform</Link></li>
          <li className={styles.li}><Link to='/'>About</Link></li>
          <li className={styles.li}><Link to='/'>Events</Link></li>
          <li className={styles.li}><Link to='/'>Contact</Link></li>
        </ul>
      </nav>
    </div>
  </div>
)

export default Header
