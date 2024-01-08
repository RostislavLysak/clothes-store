import { RefObject, useEffect } from 'react'

export const useClickAway = (
  clickAway: (v: boolean) => void,
  ref: RefObject<HTMLElement> | null,
) => {
  useEffect(() => {
    const handleClick = (e: any) => {
      if (ref?.current && !ref.current?.contains(e.target)) {
        clickAway(false)
      }
    }
    document.addEventListener('mousedown', handleClick)

    return () => {
      document.removeEventListener('mousedown', handleClick)
    }
  }, [])

  return
}
