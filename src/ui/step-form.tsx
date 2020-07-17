import React, { ReactElement } from "react"
import { Box } from "./box"
import { theme } from "../theme/theme"
import { Button } from "./buttons/button"
import { t } from "../i18n/i18n"
import { Form } from "formik"
import { useMediaQuery } from "react-responsive"

interface Props {
  buttonBottom?: string[] | string
  children: ReactElement
}

export const StepForm = ({ buttonBottom, children }: Props): ReactElement => {
  const isMobile = useMediaQuery({
    maxWidth: theme("breakpoints.0"),
  })
  const isSmallHeight = useMediaQuery({
    maxHeight: "670px",
  })

  return (
    <Form>
      <Box
        borderTop={theme("borders.1") + theme("colors.greys.0")}
        display="flex"
        flexDirection="column"
        flexWrap={["wrap", "wrap", "wrap", "no-wrap"]}
        pl={["30px", "116px", "116px", "116px", "271px", "271px"]}
        pt={isMobile ? "20px" : "30px"}
        pr={["30px", "62px", "95px", "187px", "367px"]}
        pb={["100px", 0]}
      >
        {children}
        <Box
          width={isMobile ? "314px" : "210px"}
          px={isMobile ? "auto" : 0}
          position={["fixed", "absolute"]}
          bottom={[
            "20px",
            isSmallHeight ? "40px" : buttonBottom ? buttonBottom : "100px",
          ]}
          alignSelf={["center", "center", "flex-end"]}
        >
          <Button
            type="submit"
            text={t("general.continue")}
            width={isMobile ? "314px" : "210px"}
            p="8px 11px"
          />
        </Box>
      </Box>
    </Form>
  )
}
