import React, { ReactElement } from "react"
import { Box } from "../../ui/box"
import { Text } from "../../ui/text"
import styled from "styled-components"
import { CircleCheckBox } from "../../ui/circle-checkbox"
import { theme } from "../../theme/theme"
import { getImagePath } from "../../hooks/getImagePath"

interface Props {
  title: string
  images: string[]
  isSelected: boolean
  handleSelect: () => void
}

const StyledImg = styled("img")`
  width: 40px;

  @media screen and (max-width: ${theme("breakpoints.0")}) {
    width: 30px;
  }
`

export const PaymentCard = ({
  title,
  images,
  isSelected,
  handleSelect,
}: Props): ReactElement => (
  <Box
    border={
      isSelected
        ? `${theme("borders.1")} ${theme("colors.greens.0")}`
        : `${theme("borders.1")} ${theme("colors.greys.0")}`
    }
    borderRadius="6px"
    pt={["20px", "13px"]}
    pl={["20px", "25px"]}
    pb={["21px", "27px"]}
    pr="20px"
    display="flex"
    justifyContent="space-between"
    mt="15px"
    onClick={handleSelect}
  >
    <Box>
      <Text my={0} fontSize={1} lineHeight={["16px", "34px"]} mr="59px">
        {title}
      </Text>

      <Box display="flex" mt={["14px", "8px"]}>
        {images.map((imagePath: string) => (
          <StyledImg src={getImagePath(imagePath, true)} key={imagePath} />
        ))}
      </Box>
    </Box>

    <CircleCheckBox isChecked={isSelected} />
  </Box>
)
