import React, { ReactElement } from "react"
import { Box } from "./box"
import { Text } from "./text"
import { CoverageTooltip } from "./coverage-tooltip"
import { t } from "../i18n/i18n"

interface Props {
  fields: any
  isHealth: boolean
}

export const TariffCardContent = ({
  fields,
  isHealth,
}: Props): ReactElement => (
  <Box px="20px" py="10px">
    {Object.entries(fields).map(
      (item): ReactElement => (
        <Box
          key={item[0]}
          display="flex"
          justifyContent="space-between"
          alignItems="flex-start"
          my="20px"
        >
          <Box display="flex">
            <CoverageTooltip
              subject={item[0]}
              value={
                item[0] === "tariffCard.deductible"
                  ? (item[1] as string)
                  : undefined
              }
              isHealth={isHealth}
            />
            <Text
              fontSize={0}
              lineHeight="14px"
              my={0}
              maxWidth="110px"
              color="greys.4"
              ml={0}
            >
              {isHealth ? item[0] : t(item[0])}
            </Text>
          </Box>

          <Text fontWeight="bold" fontSize={0} lineHeight="14px" my={0}>
            {String(item[1])}
          </Text>
        </Box>
      ),
    )}
  </Box>
)
