import styles from '../styles/catalog.module.css'
import Filters from './Filters'
import ListOfCars from './ListOfCars'

export default function Catalog() {
  return (
    <section className={styles.catalog}>
      <Filters />
      <ListOfCars />
    </section>
  )
}
