import React, { ReactElement } from "react"
import AliceCarousel from "react-alice-carousel"
import { Box, BoxProps } from "./box"
import styled from "styled-components"
import { useMediaQuery } from "react-responsive"
import { theme } from "../theme/theme"
import { PartnersItem } from "./partners-item"
import "react-alice-carousel/lib/alice-carousel.css"
import { AUTO_PLAY_INTERVAL } from "../core/constants"

interface Props {
  wrapperProps?: BoxProps
}

const partnersImages: string[] = [
  "partner-baolong.png",
  "partner-baoviet.png",
  "partner-bic.png",
  "partner-pjico.png",
  "partner-pti.png",
  "partner-pvi.png",
  "partner-vass.png",
  "partner-baominh.png",
  "partner-vietinbank.png",
]

const Wrapper = styled(Box)`
  .alice-carousel__dots {
    margin-top: 40px;
  }

  .alice-carousel__dots-item {
    width: 8px;
    height: 8px;
    border: ${`${theme("borders.1")} ${theme("colors.greys.0")}`};
    background-color: ${theme("colors.white")};
  }

  .alice-carousel__dots-item.__active {
    width: 8px;
    height: 8px;
    background-color: ${theme("colors.primary")};

    @media screen and (max-width: ${theme("breakpoints.2")}) {
      background-color: ${theme("colors.greens.0")};
    }
  }

  li.alice-carousel__stage-item {
    @media (min-width: 1920) {
      width: auto !important;
      margin-right: 0;
      margin-left: 0;
    }
  }
`

export const Partners = ({ wrapperProps }: Props): ReactElement => {
  const isMobile = useMediaQuery({
    maxWidth: theme("breakpoints.2"),
  })

  return (
    <Wrapper
      px={["30px", "30px", "205px"]}
      mt={isMobile ? "44px" : "51px"}
      {...wrapperProps}
    >
      <AliceCarousel
        stagePadding={{
          paddingLeft: isMobile ? 20 : 40,
          paddingRight: 0,
        }}
        autoPlay
        buttonsDisabled
        autoPlayInterval={AUTO_PLAY_INTERVAL}
        responsive={{
          0: {
            items: 3,
          },
          580: {
            items: 6,
          },
          1120: {
            items: 4,
          },
          1200: {
            items: 5,
          },
          1380: {
            items: 6,
          },
        }}
      >
        {partnersImages.map(
          (partnerImage: string): ReactElement => (
            <PartnersItem image={partnerImage} key={partnerImage} />
          ),
        )}
      </AliceCarousel>
    </Wrapper>
  )
}
