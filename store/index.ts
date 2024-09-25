import { getAllPosts } from '@/services/posts'
import { create } from 'zustand'
import { ICar } from '@/components/CarPage'

type UsePosts = {
  cars: ICar[]
  brands: string[]
  colors: string[]
  getAllPosts: () => Promise<void>
  getSortedPosts: (field: string) => Promise<void>
  getBrands: () => Promise<void>
  getColors: () => Promise<void>
  getSortedByProps: (prop: string, field: string) => Promise<void>
}

export const usePosts = create<UsePosts>()((set) => ({
  cars: [],
  brands: [],
  colors: [],
  getAllPosts: async () => {
    const cars = await getAllPosts('')
    set({ cars })
  },
  getSortedPosts: async (field) => {
    const cars = await getAllPosts(`_sort=${field}`)
    set({ cars })
  },
  getBrands: async () => {
    const cars = await getAllPosts('')
    const brands = [...new Set(cars?.map((car) => car.brand))]
    set({ brands })
  },
  getColors: async () => {
    const cars = await getAllPosts('')
    const colors = [...new Set(cars?.map((car) => car.color))]
    set({ colors })
  },
  getSortedByProps: async (prop, field) => {
    const cars = await getAllPosts(`${prop}=${field}`)
    set({ cars })
  },
}))
