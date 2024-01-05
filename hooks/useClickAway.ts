import { RefObject, useEffect } from 'react'

export const useClickAway = (
  clickAway: (v: boolean) => void,
  ref: RefObject<HTMLElement>,
) => {
  useEffect(() => {
    const closeOpenMenus = (e: any) => {
      if (ref.current && !ref.current?.contains(e.target)) {
        clickAway(false)
      }
    }
    document.addEventListener('mousedown', closeOpenMenus)

    return () => {
      document.removeEventListener('mousedown', closeOpenMenus)
    }
  }, [])

  return
}
