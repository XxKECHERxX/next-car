'use client'

import styles from '../styles/listOfCars.module.css'
import Link from 'next/link'
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
          <img src={post.image} />

          <div>
            <h4>{post.brand}</h4>
            <h4>{post.model}</h4>
            <br />
            <h4>Год: {post.year}</h4>
            <br />
            <h4>{post.price} $</h4>
          </div>
        </Link>
      ))}
    </section>
  )
}
