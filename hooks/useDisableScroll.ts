import { useEffect } from 'react'

export const useDisableScroll = (disabled: boolean) => {
  useEffect(() => {
    if (disabled) {
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.body.style.overflow = 'visible'
    }
  }, [disabled])
}
