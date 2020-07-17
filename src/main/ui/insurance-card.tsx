import React, { ReactElement } from "react"
import { Box, BoxProps } from "../../ui/box"
import { Text } from "../../ui/text"
import { Button } from "../../ui/buttons/button"
import { t } from "../../i18n/i18n"
import { useMediaQuery } from "react-responsive"
import { withRouter, RouteComponentProps } from "react-router-dom"
import {
  InsuranceCardLiabilityImage,
  InsuranceCardComprehensiveImage,
  InsuranceCardHealthImage,
} from "../insurance-card-images"
import { gtagChooseInsurance } from "../../core/gtag"

type Props = BoxProps &
  RouteComponentProps & {
    title: string
    subTitle: string
    link: string
    index: number
    isMobile: boolean
  }

export const InsuranceCard = withRouter(
  ({
    title,
    subTitle,
    link,
    history,
    index,
    isMobile,
    ...rest
  }: Props): ReactElement => {
    const isSmallerScreen = !useMediaQuery({ minWidth: "375px" })
    const isSecond = index === 1

    const handleChoose = (): void => {
      gtagChooseInsurance()
      history.push({ pathname: link })
    }

    return (
      <Box
        width={isSmallerScreen ? "270px" : isMobile ? "315px" : "300px"}
        flexShrink={0}
        mx={[0, 0, "8px", isSecond && !isMobile && "40px"]}
        my={isSecond && isMobile && "30px"}
        height="400px"
        bg="blues.4"
        borderRadius="15px"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
        pt="24px"
        pb="40px"
        {...rest}
      >
        <Box>
          {index === 0 && <InsuranceCardLiabilityImage />}
          {index === 1 && <InsuranceCardComprehensiveImage />}
          {index === 2 && <InsuranceCardHealthImage />}
        </Box>

        <Box display="flex" flexDirection="column" alignItems="center">
          <Text
            mb={0}
            mt="24px"
            fontWeight="bold"
            fontSize={5}
            lineHeight="32px"
            color="blues.1"
          >
            {title}
          </Text>

          <Text my={0} color="blues.2">
            {subTitle}
          </Text>

          <Button
            text={t("general.compare")}
            mt="30px"
            py="3px"
            variant="compare"
            width="144px"
            onClick={handleChoose}
          />
        </Box>
      </Box>
    )
  },
)
