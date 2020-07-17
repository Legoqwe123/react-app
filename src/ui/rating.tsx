import React, { ReactElement, Fragment } from "react"
import { SvgStarFilled } from "./icons/star-filled"
import { SvgStar } from "./icons/star"

interface Props {
  rating: number
}

export const Rating = ({ rating }: Props): ReactElement => {
  const flooredRating = Math.floor(rating)

  return (
    <Fragment>
      {[1, 2, 3, 4, 5].map(
        (item): ReactElement =>
          item <= flooredRating ? (
            <SvgStarFilled key={item} />
          ) : (
            <SvgStar key={item} />
          ),
      )}
    </Fragment>
  )
}
