import React, { ReactElement } from "react"
import { Box } from "./box"
import { Text } from "./text"
import { t } from "../i18n/i18n"
import { getImagePath } from "../hooks/getImagePath"
import styled from "styled-components"
import { Rating } from "./rating"

interface Props {
  imagePath: string
  rating: number
  company: string
}

const StyledImg = styled("img")`
  max-width: 170px;
  max-height: 35px;
`

export const CompaniesTariffCarHeader = ({
  imagePath,
  rating,
  company,
}: Props): ReactElement => (
  <Box
    display="flex"
    justifyContent="space-between"
    pl="20px"
    pt="20px"
    pr="20px"
    pb="16px"
    height="70px"
  >
    <StyledImg src={getImagePath(imagePath)} alt="" />

    <Box display="flex" flexDirection="column">
      <Text my={0} fontSize={0} lineHeight="14px" textAlign="right">
        {company}
      </Text>

      <Box ml="auto" mt={["6px", 0]} display="flex" alignItems="center">
        <Text
          my={0}
          color="blacks.1"
          fontSize="10px"
          lineHeight="12px"
          textAlign="right"
          mr="5px"
        >
          {t("general.points", {
            0: rating,
          })}
        </Text>

        <Rating rating={rating} />
      </Box>
    </Box>
  </Box>
)
