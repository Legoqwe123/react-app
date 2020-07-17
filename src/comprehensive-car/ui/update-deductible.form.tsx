import React, { ReactElement } from "react"
import noop from "lodash/noop"
import { Formik } from "formik"

import { DeductibleSelect } from "./deductible-select"
import { Box } from "../../ui/box"
import { Text } from "../../ui/text"
import { t } from "../../i18n/i18n"

interface Props {
  initialValue: string
  handleChange: (value: string) => void
}

export const UpdateDeductibleForm = ({
  initialValue,
  handleChange,
}: Props): ReactElement => {
  return (
    <Formik initialValues={{ deductible: initialValue }} onSubmit={noop}>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent={["center", "flex-end"]}
        alignItems="center"
        mx={["30px", "30px", "30px", "30px", "180px"]}
        mt="32px"
      >
        <Text fontSize={3} mr="24px" minWidth="76px">
          {t("comprehensiveCar.deductibleLabel")}
        </Text>
        <Box maxWidth={["unset", "217px"]} width="100%">
          <DeductibleSelect
            initialValue={initialValue}
            onChange={handleChange}
            feedBackBoxProps={{ display: "none" }}
          />
        </Box>
      </Box>
    </Formik>
  )
}
