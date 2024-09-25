'use client'

import styles from '../styles/filters.module.css'
import { useEffect, useState } from 'react'
import { usePosts } from '@/store'
import { useShallow } from 'zustand/shallow'

export default function Filters() {
  const [sortByYear, setSortByYear] = useState<string>('')
  const [sortByPrice, setSortByPrice] = useState<string>('')
  const [sortByBrand, setSortByBrand] = useState<string>('')
  const [sortByColor, setSortByColor] = useState<string>('')

  const [
    brands,
    colors,
    getAllPosts,
    getSortedPosts,
    getBrands,
    getColors,
    getSortedByProps,
  ] = usePosts(
    useShallow((state) => [
      state.brands,
      state.colors,
      state.getAllPosts,
      state.getSortedPosts,
      state.getBrands,
      state.getColors,
      state.getSortedByProps,
    ])
  )

  const handleAscOrDesc = (field: string) => {
    getSortedPosts(field)
  }
  const handleSortByProp = (prop: string, field: string) => {
    getSortedByProps(prop, field)
  }

  useEffect(() => {
    getBrands()
  }, [getBrands])

  useEffect(() => {
    getColors()
  }, [getColors])

  // Изменение фильтров

  useEffect(() => {
    if (sortByYear === 'desc') {
      handleAscOrDesc('-year')
    } else {
      handleAscOrDesc('year')
    }
  }, [sortByYear])

  useEffect(() => {
    if (sortByPrice === 'desc') {
      handleAscOrDesc('-price')
    } else {
      handleAscOrDesc('price')
    }
  }, [sortByPrice])

  useEffect(() => {
    if (sortByBrand === 'Все') {
      getAllPosts()
    } else {
      handleSortByProp('brand', sortByBrand)
    }
  }, [sortByBrand])

  useEffect(() => {
    if (sortByColor === 'Все') {
      getAllPosts()
    } else {
      handleSortByProp('color', sortByColor)
    }
  }, [sortByColor])

  return (
    <section className={styles.filters}>
      <form>
        <label>
          По году выпуска
          <select
            value={sortByYear}
            onChange={(e) => setSortByYear(e.target.value)}
          >
            <option value="asc">По возрастанию</option>
            <option value="desc">По убыванию</option>
          </select>
        </label>

        <label>
          По цене
          <select
            value={sortByPrice}
            onChange={(e) => setSortByPrice(e.target.value)}
          >
            <option value="asc">По возрастанию</option>
            <option value="desc">По убыванию</option>
          </select>
        </label>

        <label>
          По марке
          <select
            value={sortByBrand}
            onChange={(e) => setSortByBrand(e.target.value)}
          >
            <option value="Все">Все</option>
            {brands.map((brand) => (
              <option value={brand} key={brand}>
                {brand}
              </option>
            ))}
          </select>
        </label>

        <label>
          По цвету
          <select
            value={sortByColor}
            onChange={(e) => setSortByColor(e.target.value)}
          >
            <option value="Все">Все</option>
            {colors.map((color) => (
              <option value={color} key={color}>
                {color}
              </option>
            ))}
          </select>
        </label>
      </form>
    </section>
  )
}
