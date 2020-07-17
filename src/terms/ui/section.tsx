import React, { ReactElement } from "react"
import { Clause } from "./clause"
import { Box } from "../../ui/box"
import { Title } from "./title"

export interface SectionTypes {
  title: string
  clauses: string[]
}

interface Props {
  sectionData: SectionTypes
  isFirst: boolean
}

export const Section = ({ sectionData, isFirst }: Props): ReactElement => (
  <Box mt={isFirst ? "70px" : "50px"}>
    <Title title={sectionData.title} />
    {sectionData.clauses.map(
      (clause: string, index: number): ReactElement => (
        <Clause key={index}>{clause}</Clause>
      ),
    )}
  </Box>
)
