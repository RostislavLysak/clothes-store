import { getTranslations } from 'next-intl/server'

export const getTranslation = async <T extends string>(
  arr: readonly T[],
  namespace: string,
) => {
  const t = await getTranslations(namespace)
  const result = {} as Record<(typeof arr)[number], string>

  arr.forEach((item) => {
    result[item] = t(item)
  })

  return result
}

export const translation = async (namespace: string) => {
  const t = await getTranslations(namespace)

  return t
}
