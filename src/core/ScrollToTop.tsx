import { useEffect } from "react"
import { withRouter, RouteComponentProps } from "react-router-dom"
import { usePrevious } from "../hooks/usePrevious"

export const ScrollToTop = withRouter(
  ({ location: { pathname } }: RouteComponentProps): null => {
    const prevPathname = usePrevious(pathname)

    useEffect(() => {
      if (prevPathname !== pathname) {
        try {
          window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
          })
        } catch (error) {
          window.scrollTo(0, 0)
        }
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname])

    return null
  },
)
