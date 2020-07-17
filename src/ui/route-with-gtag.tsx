import React, { ReactElement, ComponentType, useEffect } from "react"
import { Route, useHistory } from "react-router-dom"
import { gtagPageView } from "../core/gtag"
import { root } from "../routes"

interface Props {
  path: string
  exact?: boolean
  component: ComponentType
}

export const RouteWithGtag = ({
  path,
  component,
  exact,
}: Props): ReactElement => {
  const history = useHistory()

  useEffect(() => {
    if (history.location.pathname === root) {
      return
    }

    gtagPageView()
  }, [history.location.pathname])

  return <Route path={path} exact={exact} component={component} />
}
