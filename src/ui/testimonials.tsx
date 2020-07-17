import React, { ReactElement } from "react"
import AliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css"
import { TestimonialsProps } from "../core"
import { TestimonialsItem } from "./testimonials-item"
import { Box, BoxProps } from "./box"
import { Text } from "./text"
import { t } from "../i18n/i18n"
import styled from "styled-components"
import { useMediaQuery } from "react-responsive"
import { theme } from "../theme/theme"
import testimonialData from "../testimonials-vi-data.json"
import { AUTO_PLAY_INTERVAL } from "../core/constants"

const Wrapper = styled(Box)`
  .alice-carousel__dots {
    margin-top: 0;
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
  }

  .alice-carousel__stage-item:not(.__cloned):not(.__active) > * {
    box-shadow: none;
    opacity: 0.6;
  }

  .alice-carousel__stage-item {
    margin-top: 20px;
    margin-bottom: 40px;
  }

  li.alice-carousel__stage-item > * {
    @media screen and (max-width: ${theme("breakpoints.3")}) {
      margin-left: auto;
      margin-right: auto;
    }
  }
`

export const Testimonials = ({ ...rest }: BoxProps): ReactElement => {
  const isMobile = useMediaQuery({
    maxWidth: theme("breakpoints.3"),
  })

  return (
    <Box maxWidth={["auto", "auto", "1095px"]} mx={[0, 0, "auto"]} {...rest}>
      <Text fontWeight="bold" fontSize={7} textAlign="center" color="primary">
        {t("general.testimonials")}
      </Text>

      <Wrapper>
        <AliceCarousel
          stagePadding={{
            paddingLeft: isMobile ? 0 : 9,
            paddingRight: 0,
          }}
          autoPlay
          infinite
          buttonsDisabled
          autoPlayInterval={AUTO_PLAY_INTERVAL}
          responsive={{
            0: {
              items: 1,
            },
            740: {
              items: 2,
            },
            1280: {
              items: 3,
            },
          }}
        >
          {testimonialData.map(
            (testimonial: TestimonialsProps): ReactElement => (
              <TestimonialsItem {...testimonial} key={testimonial.name} />
            ),
          )}
        </AliceCarousel>
      </Wrapper>
    </Box>
  )
}
