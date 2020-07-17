import React, { ReactElement } from "react"
import { Box } from "../../ui/box"
import { Text } from "../../ui/text"
import { t } from "../../i18n/i18n"
import { HealthHeaderImage } from "./health-header-image"
import { Button } from "../../ui/buttons/button"
import { useMediaQuery } from "react-responsive"
import { theme } from "../../theme/theme"
import { HashLink } from "react-router-hash-link"
import { healthcareFormAnchor } from "../../core/anchors"

interface Props {
  isMobile: boolean
}

export const HeaderLeftSide = ({ isMobile }: Props): ReactElement => {
  const isBigImg = useMediaQuery({
    maxWidth: theme("breakpoints.0"),
  })

  return (
    <Box width="100%" display="flex" flexDirection="column">
      <Box
        ml={[0, 0, "60px", "180px"]}
        display={isMobile ? "flex" : "block"}
        flexDirection="column"
        alignItems="center"
      >
        <Text
          color="primary"
          fontWeight="bold"
          fontSize={isBigImg ? 6 : 8}
          lineHeight={isBigImg ? "32px" : "45px"}
          my={0}
          px={isMobile ? "36px" : 0}
          textAlign={isMobile ? "center" : "left"}
          width={isMobile ? "303px" : "349px"}
        >
          {t("health.title")}
        </Text>

        <Text
          fontSize={4}
          lineHeight="34px"
          mb={0}
          mt="14px"
          px={isBigImg ? "45px" : 0}
          textAlign={isMobile ? "center" : "left"}
          width={isMobile ? "260px" : "300px"}
        >
          {t("health.subTitle")}
        </Text>

        {isMobile && (
          <HashLink to={healthcareFormAnchor}>
            <Button
              text={t("general.compare")}
              width="315px"
              mt="30px"
              mx="auto"
            />
          </HashLink>
        )}
      </Box>

      <HealthHeaderImage isBigImg={isBigImg} />
    </Box>
  )
}
