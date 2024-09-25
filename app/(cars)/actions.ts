'use server'

import axios from 'axios'
import { randomUUID } from 'crypto'
import { redirect } from 'next/navigation'
import fs from 'node:fs/promises'
import { revalidatePath } from 'next/cache'

export async function uploadFile(data: FormData) {
  const file = data.get('file') as File

  if (!file) {
    throw new Error('Файл не выбран.')
  }

  const arrayBuffer = await file.arrayBuffer()
  const buffer = new Uint8Array(arrayBuffer)

  await fs.writeFile(`./public/uploads/${file.name}`, buffer)

  revalidatePath('/')

  return `/uploads/${file.name}`
}

export async function createPost(data: FormData) {
  const { brand, model, year, distance, price, transmission, engine, color } =
    Object.fromEntries(data)

  const image = await uploadFile(data)

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
