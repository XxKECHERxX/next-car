'use client'

import styles from '../styles/listOfCars.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { ICar } from './CarPage'
import { usePosts } from '@/store'
import { useShallow } from 'zustand/shallow'
import { useEffect } from 'react'

export default function ListOfCars() {
  const [cars, getAllPosts] = usePosts(
    useShallow((state) => [state.cars, state.getAllPosts])
  )

  useEffect(() => {
    getAllPosts()
  }, [getAllPosts])

  return (
    <section className={styles.listOfCars}>
      {cars.map((post: ICar) => (
        <Link href={`./${post.id}`} key={post.id} className={styles.post}>
          <div className={styles.carPhoto}>
            <Image
              src={post.image}
              alt={`${post.brand} ${post.model}`}
              fill
              sizes="50vw, 100vw"
              priority
            />
          </div>

          <div className={styles.info}>
            <div>{post.brand}</div>
            <div>{post.model}</div>
            <br />
            <div>Год: {post.year}</div>
            <br />
            <div>Цена: {post.price} $</div>
          </div>
        </Link>
      ))}
    </section>
  )
}
