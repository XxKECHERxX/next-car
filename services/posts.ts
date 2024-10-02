import axios from 'axios'
import { ICar } from '@/components/CarPage'

const SERVER_URL = 'http://localhost:3001/cars'

export async function getAllPosts(
  query: string,
  endpoint = SERVER_URL
): Promise<ICar[] | undefined> {
  try {
    query ? (query = `?${query}`) : (query = '')

    const response = await axios.get<ICar[]>(`${endpoint}${query}`)

    return response.data
  } catch (err) {
    console.error((err as Error).message || err)
    return undefined
  }
}