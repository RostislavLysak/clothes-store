import { useEffect } from 'react'

export const useDisableScroll = (disabled: boolean) => {
  useEffect(() => {
    if (disabled) {
      document.body.style.overflowY = 'hidden'
    }

    return () => {
      document.body.style.overflowY = 'visible'
    }
  }, [disabled])
}
