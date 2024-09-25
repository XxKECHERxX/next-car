'use server'

import axios from 'axios'
import { randomUUID } from 'crypto'
import { redirect } from 'next/navigation'

export async function createPost(data: FormData) {
  const {
    brand,
    model,
    year,
    distance,
    price,
    transmission,
    engine,
    image,
    color,
  } = Object.fromEntries(data)

  const response = await axios.post(
    'http://localhost:3001/cars',
    {
      brand,
      model,
      year,
      distance,
      price,
      transmission,
      engine,
      image,
      id: randomUUID(),
      color,
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )

  redirect('/')
}
