import CarPage from '@/components/CarPage'
import axios from 'axios'

type Props = {
  params: {
    id: string
  }
}

export function generateMetadata({ params: { id } }: Props) {
  return {
    title: `NextCar | ${id}`,
  }
}

async function getPostById(id: string) {
  try {
    const response = axios.get(`http://localhost:3001/cars/${id}`)
    return await response
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.message)
    } else {
      console.error('Unexpected error:', error)
    }
  }
}

export default async function Car({ params: { id } }: Props) {
  const post = await getPostById(id)

  return <CarPage {...post?.data} />
}
