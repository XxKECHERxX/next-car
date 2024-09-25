'use client'
import { uploadFile } from '@/app/(cars)/actions'

export default function UploadForm() {
  return (
    <form action={uploadFile}>
      <label>
        <input type="file" name="file" accept="image/*" />
      </label>
      <button type="submit">Submit</button>
    </form>
  )
}
