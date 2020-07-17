import React, { ReactElement } from "react"
import { Box } from "../../ui/box"
import { Form, FormikProps } from "formik"
import { Text } from "../../ui/text"
import { t } from "../../i18n/i18n"
import { ComprehensiveCarHeaderFields } from "./comprehensive-car-header-fields"
import { useMediaQuery } from "react-responsive"
import { theme } from "../../theme/theme"
import { ComprehensiveCarHeaderProps } from "./comprehensive-car-header-form"
import { comprehensiveCarId } from "../../core/anchors"

type Props = FormikProps<ComprehensiveCarHeaderProps> & {
  banScrollTo?: boolean
}

export const ComprehensiveCarHeaderView = ({
  setFieldValue,
  values,
  banScrollTo,
}: Props): ReactElement => {
  const isMobile = !useMediaQuery({
    minWidth: theme("breakpoints.1"),
  })

  return (
    <Form>
      <Box
        id={banScrollTo ? undefined : comprehensiveCarId}
        width={["315px", "315px", "340px", "340px", "436px"]}
        mx="auto"
        mt={isMobile ? "35px" : 0}
        px={isMobile ? "15px" : 0}
      >
        <Text
          textAlign={isMobile ? "center" : "left"}
          color={isMobile ? "primary" : "blacks.0"}
          fontSize={isMobile ? 5 : "22px"}
          lineHeight={isMobile ? "32px" : "44px"}
          fontWeight={isMobile ? "bold" : "normal"}
          my={0}
          px={isMobile ? "50px" : 0}
        >
          {t("navigation.comprehensiveCar")}
        </Text>

        <Text
          textAlign={isMobile ? "center" : "left"}
          color={isMobile ? "text.1" : "greys.1"}
          fontSize={isMobile ? 3 : "22px"}
          lineHeight={isMobile ? "34px" : "44px"}
          mt={isMobile ? "10px" : 0}
          mb={0}
        >
          {t("comprehensiveCar.quotes")}
        </Text>

        <ComprehensiveCarHeaderFields
          isMobile={isMobile}
          setFieldValue={setFieldValue}
          values={values}
        />
      </Box>
    </Form>
  )
}
