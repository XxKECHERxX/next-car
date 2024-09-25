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

// const models = async () => {
//   const response = await getAllPosts('');
//   return response?.map(car => car.model);
// };

// const getModels = async () => {
//   const result = await models();
//   console.log(result);
// };

// getModels();


// export const getSortedPosts = async (field: string, order: string)=> {
//   return await getAllPosts(`_sort=${field}&_order=${order}`)
// }

// export const getSortedByModel = (field: string) => getAllPosts(`brand=${field}`)
