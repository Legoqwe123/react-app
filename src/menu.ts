import { t } from "./i18n/i18n"
import {
  carLiability,
  comprehensiveCar,
  healthcare,
  feedback,
  root,
} from "./routes"
import { Menu } from "./core"

export const menu: Menu[] = [
  {
    name: t("navigation.carLiability"),
    route: carLiability,
  },
  {
    name: t("navigation.comprehensiveCar"),
    route: comprehensiveCar,
  },
  {
    name: t("navigation.health"),
    route: healthcare,
  },
  {
    name: t("navigation.feedback"),
    route: feedback,
  },
]

export const sidebarMenu: Menu[] = [
  {
    name: t("navigation.home"),
    route: root,
  },
  ...menu,
]
