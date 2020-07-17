import React, { ReactElement } from "react"
import { getImagePath } from "../../hooks/getImagePath"

import { Box } from "../../ui/box"
import { DescriptionItem, Item } from "./description-item"

const items: Item[] = [
  { src: getImagePath("search.png"), text: "description.search" },
  {
    src: getImagePath("compare.png"),
    text: "description.compare",
    containerProps: { pl: [0, 0, "70px"] },
  },
  {
    src: getImagePath("promotions.png"),
    text: "description.promotions",
    containerProps: { pl: [0, 0, "140px"] },
  },
]

export const DescriptionList = (): ReactElement => (
  <Box
    pl={["30px", "30px", 0]}
    pr="30px"
    ml={[0, 0, "auto"]}
    mt={[0, 0, 0, 0, "57px"]}
    width={["auto", "auto", "48%", "40%"]}
  >
    {items.map(
      ({ src, text, containerProps }): ReactElement => (
        <DescriptionItem
          src={src}
          text={text}
          containerProps={containerProps}
          key={text}
        />
      ),
    )}
  </Box>
)
