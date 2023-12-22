import { useEffect, useRef, useState } from 'react'

const useScrollHeader = () => {
  const [show, setShow] = useState(true)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const controlNavbar = () => {
      const positiveWindow = window.scrollY < 0 ? 0 : window.scrollY
        setShow(!(positiveWindow > lastScrollY.current))

        lastScrollY.current = positiveWindow
    }

    window.addEventListener('scroll', controlNavbar)

    return () => {
      window.removeEventListener('scroll', controlNavbar)
    }
  }, [])

  return {
    show,
  }
}

export default useScrollHeader
