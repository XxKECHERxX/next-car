'use client'

import styles from '../styles/formAddCar.module.css'
import { createPost } from '@/app/(cars)/actions'
import { useEffect, useState } from 'react'
import { toBase64 } from '@/app/(cars)/upload'

export default function FormAddCar() {
  const [typeEngine, setTypeEngine] = useState<string>('')
  const [transmisionON, setTransmisionOn] = useState<boolean>(false)
  const [distanceON, setDistanceOn] = useState<boolean>(true)
  const [formData, setFoqrmData] = useState(new FormData())

  useEffect(() => {
    if (typeEngine === 'Электрический') {
      setTransmisionOn(true)
      setDistanceOn(false)
    } else {
      setTransmisionOn(false)
      setDistanceOn(true)
    }
  }, [typeEngine])

  const handleFileChange = async (event) => {
    const file: Blob = event.target.files[0]

    const encodeBase64 = await toBase64(file)

    if (file) {
      formData.set('image', encodeBase64)
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    await createPost(formData)
  }

  return (
    <form className={styles.formAddCar} onSubmit={handleSubmit}>
      <h2>Добавить автомобиль</h2>
      <label>
        <input type="text" placeholder="Бренд" name="brand" required />
        <input type="text" placeholder="Модель" name="model" required />
      </label>

      <label>
        <input
          type="number"
          min="1900"
          max="2099"
          defaultValue={2024}
          step="1"
          placeholder="Год выпуска"
          name="year"
          required
        />

        <input type="text" placeholder="Цвет автомобиля" name="color" />
      </label>

      <div className={styles.chooseVariants}>
        <label>
          <h4>Тип двигателя</h4>
          <select
            name="engine"
            value={typeEngine}
            onChange={(e) => setTypeEngine(e.target.value)}
          >
            <option value="Бензиновый">Бензиновый</option>
            <option value="Дизельный">Дизельный</option>
            <option value="Электрический">Электрический</option>
          </select>
        </label>

        <label>
          <h4>Трансмиссия</h4>
          <select disabled={transmisionON} name="transmission">
            <option value="Автоматическая">Автоматическая</option>
            <option value="Ручная">Ручная</option>
            <option value="Роботизированная">Роботизированная</option>
          </select>
        </label>
      </div>

      <label>
        <input
          type="number"
          min="0"
          max="10000"
          step="1"
          placeholder="Запас хода"
          disabled={distanceON}
          name="distance"
        />
        *доступен только для типа двигателя "Электрический"
      </label>

      <label>
        <input
          type="file"
          placeholder="image"
          name="image"
          accept="image/*"
          onChange={handleFileChange}
        />
        <input type="number" placeholder="Цена" min="0" required name="price" />
      </label>

      <button type="submit">Добавить</button>
    </form>
  )
}
