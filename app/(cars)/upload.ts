'use client'

export const toBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onloadend = () => {
      if (typeof reader.result === 'string') {
        resolve(reader.result.split(',')[1]) // Извлекаем только base64 часть
      } else {
        reject(new Error('FileReader result is not a string'))
      }
    }
    reader.onerror = (error) => {
      reject(error)
    }
    reader.readAsDataURL(file) // Чтение файла как Data URL
  })
}
