import { useEffect } from "react"
import isEmpty from "lodash/isEmpty"
import { useHistory } from "react-router-dom"

export const useEmptyStateRedirect = (pathname: string): void => {
  const history = useHistory()
  const state = history.location.state || {}

  useEffect((): void => {
    isEmpty(state) && history.push({ pathname })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
