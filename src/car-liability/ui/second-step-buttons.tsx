import React, { ReactElement, Fragment } from "react"
import { Button } from "../../ui/buttons/button"
import { t } from "../../i18n/i18n"

export const SecondStepButtons = (): ReactElement => (
  <Fragment>
    <Button
      text={t("carLiability.step2.action")}
      variant="primary"
      type="submit"
      width="calc(100% - 62px)"
      maxWidth="314px"
      minHeight="50px"
      display={["block", "block", "none"]}
      py="8px"
      mx="auto"
      mb="30px"
    />
    <Button
      text={t("carLiability.step2.desktopAction")}
      variant="primary"
      type="submit"
      width="210px"
      minHeight="50px"
      display={["none", "none", "block"]}
      py="8px"
      ml="auto"
      mr={[0, 0, "120px", "120px", "277px"]}
      mb="100px"
    />
  </Fragment>
)
