import { useHistory } from "react-router-dom"
import { useEffect } from "react"

enum Action {
  POP = "POP",
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useLocation = (state: any, backRoute?: string): null => {
  const history = useHistory()

  useEffect((): void => {
    if (!backRoute || Object.keys(state).length === 0) {
      return
    }

    const cleanUp = history.listen((_, action): void => {
      if (action === Action.POP) {
        history.replace({ pathname: backRoute, state })
        cleanUp()
      }
    })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return null
}
