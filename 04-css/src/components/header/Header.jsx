import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.container}>
        <h3 className={styles.header}>This is Header</h3>
        <button className={styles.btn}>Click Me</button>
    </div>
  )
}

export default Header