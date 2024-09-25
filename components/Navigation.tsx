'use client'

import styles from '../styles/navigation.module.css'
import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'

export default function Navigation() {
  const session = useSession()

  return (
    <header>
      <nav className={styles.navigation}>
        <Link href="/">
          <h1>
            Next<span>Car</span>
          </h1>
        </Link>

        {session?.data && (
          <div className={styles.userLogIn}>
            <Link href="/addcar">Добавить пост</Link>
            <div className={styles.userName}>{session.data.user?.name}</div>
          </div>
        )}
        {session?.data ? (
          <Link href="#" onClick={() => signOut({ callbackUrl: '/' })}>
            Выйти
          </Link>
        ) : (
          <Link href="/api/auth/signin">Войти</Link>
        )}
      </nav>
    </header>
  )
}
