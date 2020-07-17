import React, { ReactElement } from "react"
import { Box, BoxProps } from "../box"
import { useMediaQuery } from "react-responsive"
import { theme } from "../../theme/theme"
import { FooterMenu } from "./footer-menu"
import { FooterFeed } from "./footer-feed"
import { FooterPrivacyPolicy } from "./footer-privacy-policy"

export const Footer = ({ ...rest }: BoxProps): ReactElement => {
  const isMobile = useMediaQuery({
    maxWidth: theme("breakpoints.3"),
  })

  return (
    <Box
      width="100%"
      height={isMobile ? "auto" : "230px"}
      borderTop={`${theme("borders.1")} ${theme("colors.greys.0")}`}
      display={isMobile ? "block" : "flex"}
      px={isMobile ? 0 : "188px"}
      pt={!isMobile && "29px"}
      pb={!isMobile && "37px"}
      justifyContent="space-between"
      {...rest}
    >
      <FooterMenu isMobile={isMobile} />
      <FooterFeed isMobile={isMobile} />
      <FooterPrivacyPolicy isMobile={isMobile} />
    </Box>
  )
}
