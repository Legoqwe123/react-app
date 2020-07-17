import React, { ReactElement } from "react"
import { Text } from "../../ui/text"

export const Title = ({ title }: { title: string }): ReactElement => (
  <Text
    fontWeight="bold"
    fontSize={[5, 5, 7]}
    lineHeight={["32px", "32px", "42px"]}
    color="primary"
    mb={["20px", "20px", "30px"]}
    mt={0}
  >
    {title}
  </Text>
)
