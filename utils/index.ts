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

export const upperCamelCase = (value: string) => {
  let newValue = ''
  for (let i = 0; i < value.length; ++i) {
    let charCode = value.charCodeAt(i)

    if (charCode > 64 && charCode < 91) {
      newValue += ` ${value[i]}`
    } else {
      newValue += value[i]
    }
  }

  const result = capitalize(newValue)

  return result
}
