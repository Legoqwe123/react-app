import React, { ReactElement } from "react"
import { Box } from "../../ui/box"
import { Terms } from "../terms-data"
import { SectionTypes, Section } from "./section"

interface Props {
  data: Terms
}

export const TermsSections = ({ data }: Props): ReactElement => (
  <Box mx={["30px", "30px", "190px"]} mt={["50px", "50px", "70px"]}>
    {data.map(
      (section: SectionTypes, index: number): ReactElement => (
        <Section isFirst={index === 0} sectionData={section} key={index} />
      ),
    )}
  </Box>
)
