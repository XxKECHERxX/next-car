import { useState } from 'react'
import styles from '../styles/imageUpload.module.css'

const ImageUploader = () => {
  const [imageData, setImageData] = useState(null)

  const handleFileChange = (event) => {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        // Преобразуем в base64
        const base64data = reader.result
        // Сохраняем в state в формате JSON
        setImageData({ image: base64data })
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <form>
      <label className={styles.upload}>
        Загрузить фото
        <input type="file" accept="image/*" onChange={handleFileChange} />
      </label>
      {imageData && (
        <img
          src={imageData.image}
          alt="Uploaded"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      )}
    </form>
  )
}

export default ImageUploader
