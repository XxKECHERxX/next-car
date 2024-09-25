'use client'

import styles from '../styles/formAddCar.module.css'
import { createPost } from '@/app/(cars)/actions'
import { useEffect, useState } from 'react'

export default function FormAddCar() {
  const [typeEngine, setTypeEngine] = useState<string>('')
  const [transmissionON, setTransmissionOn] = useState<boolean>(false)
  const [distanceON, setDistanceOn] = useState<boolean>(true)

  useEffect(() => {
    if (typeEngine === 'Электрический') {
      setTransmissionOn(true)
      setDistanceOn(false)
    } else {
      setTransmissionOn(false)
      setDistanceOn(true)
    }
  }, [typeEngine])

  return (
    <>
      <form className={styles.formAddCar} action={createPost}>
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
            <select disabled={transmissionON} name="transmission">
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
            type="number"
            placeholder="Цена"
            min="0"
            required
            name="price"
          />
          <input type="file" name="file" accept="image/*" />
        </label>

        <button type="submit">Submit</button>
      </form>
    </>
  )
}
