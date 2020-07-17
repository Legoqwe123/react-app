import { createIntl, createIntlCache } from "react-intl"

import isString from "lodash/isString"

import { vi } from "./locales/vi"
import { en } from "./locales/en"
import Cookies from "js-cookie"
import { DEFAULT_LANG } from "../core/constants"

interface NestedMessages {
  [key: string]: string | NestedMessages
}

const flattenMessages = (
  nestedMessages: NestedMessages,
  prefix = "",
): Record<string, string> =>
  Object.keys(nestedMessages).reduce(
    (acc: Record<string, string>, key: string): Record<string, string> => {
      const value = nestedMessages[`${key}`]
      const prefixedKey = prefix ? `${prefix}.${key}` : key

      if (isString(value)) {
        acc[`${prefixedKey}`] = value
      } else {
        Object.assign(acc, flattenMessages(value, prefixedKey))
      }

      return acc
    },
    {},
  )

const messages: { [key: string]: Record<string, string> } = {
  en: flattenMessages(en),
  vi: flattenMessages(vi),
}

const lang = Cookies.get("lang")

export const locale = lang ? lang.toLowerCase() : DEFAULT_LANG.toLowerCase()

// This is optional but highly recommended
// since it prevents memory leak
const cache = createIntlCache()

export const intl = createIntl(
  {
    locale,
    messages: messages[`${locale}`],
  },
  cache,
)

export const t = (id: string, values = {}): string =>
  intl.formatMessage({ id }, values)
