import { useState, useEffect } from "react"
import { SPINNER_TIME } from "../core/constants"

export const useShowSpinner = (initiallyVisible = true): boolean => {
  const [isVisible, setIsVisible] = useState(initiallyVisible)

  useEffect(() => {
    const timer = setTimeout((): void => {
      setIsVisible(false)
    }, SPINNER_TIME)

    return (): void => {
      clearTimeout(timer)
    }
  }, [])

  return isVisible
}
