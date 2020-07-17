import React, { ReactElement, Fragment } from "react"
import { Box } from "../../ui/box"
import { Text } from "../../ui/text"
import { SvgPlus } from "../../ui/icons/plus"

interface Props {
  personalInsurance: string
  voluntaryInsurance: string
}

export const HeaderSecondLine = ({
  personalInsurance,
  voluntaryInsurance,
}: Props): ReactElement => (
  <Box display="flex" mt={["10px", "10px", 0]} ml={0}>
    <SvgPlus
      box={{ minWidth: "15px", pt: "3px" }}
      props={{ style: { backgroundColor: "transparent" } }}
    />
    <Text
      display={["block", "block", "none"]}
      m="0 0 0 9px"
      fontSize={1}
      lineHeight="22px"
    >
      {personalInsurance}
      {voluntaryInsurance && personalInsurance ? (
        <Fragment>
          ,<br />
        </Fragment>
      ) : (
        ""
      )}
      {voluntaryInsurance}
    </Text>

    <Text
      display={["none", "none", "block"]}
      m="0 0 0 9px"
      fontSize={1}
      lineHeight="22px"
    >
      {`${personalInsurance}${
        personalInsurance && voluntaryInsurance ? ", " : ""
      }${voluntaryInsurance}`}
    </Text>
  </Box>
)
