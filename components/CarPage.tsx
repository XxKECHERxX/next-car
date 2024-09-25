import styles from '../styles/carPage.module.css'
import Image from 'next/image'

export interface ICar {
  id: string
  brand: string
  model: string
  year: number
  color: string
  engine: string
  transmission?: string
  distance?: number
  image: string
  price: number
}

export default async function CarPage(car: ICar) {
  return (
    <section className={styles.carPage}>
      <div className={styles.carPhoto}>
        <Image
          src={car.image}
          alt={`${car.brand} ${car.model}`}
          fill
          priority
        />
      </div>

      <ul>
        <li>
          Модель: {car.brand} {car.model}
        </li>
        <li>Год: {car.year}</li>
        <li>Цвет: {car.color}</li>
        <li>Тип двигателя: {car.engine}</li>
        {car.transmission ? <li>{car.transmission}</li> : ''}
        {car.distance ? <li>Запас хода: {car.distance} км</li> : ''}
        <li>Цена: {car.price} $</li>
      </ul>
    </section>
  )
}
