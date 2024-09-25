'use client'

import Link from 'next/link'
import styles from '../styles/navigation.module.css'

export default function Navigation() {
  return (
    <header>
      <nav className={styles.navigation}>
        <Link href="/">
          <h1>
            Next<span>Car</span>
          </h1>
        </Link>

        <Link href="/addcar">Добавить</Link>
        <Link href="/api/auth/signin">Войти</Link>
      </nav>
    </header>
  )
}
