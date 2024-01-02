export const capitalize = (value: string) => {
  return value[0].toUpperCase() + value.slice(1)
}

export const readAsDataURL = (file: File) => {
  return new Promise((res, rej) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => res(reader.result as string)
    reader.onerror = (err) => rej(err)
  })
}
