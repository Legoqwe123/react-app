import React, { ReactElement } from "react"
import { Box } from "../ui/box"
import { Button } from "../ui/buttons/button"
import { TermsHeader } from "./ui/terms-header"
import { HeaderPage } from "../ui/header.page"
import { TermsSections } from "./ui/terms-sections"
import { Footer } from "../ui/footer/footer"
import { t } from "../i18n/i18n"
import { terms } from "../routes"
import { useHistory } from "react-router-dom"
import { privacyPolicyData } from "./privacy-policy-data"

export const PrivacyPolicyPage = (): ReactElement => {
  const history = useHistory()

  const handleClickButton = (): void => history.push(terms)

  return (
    <Box>
      <HeaderPage />

      <TermsHeader
        title={t("terms.privacyPolicy")}
        lastUpdate={t("terms.lastUpdatePrivacyPolicy")}
        buttonText={t("copyRight.termsAndConditions")}
        handleClick={handleClickButton}
      />

      <Button
        variant="outline"
        width="315px"
        display={["flex", "flex", "none"]}
        justifyContent="center"
        mx="auto"
        mt="40px"
        text={t("copyRight.termsAndConditions")}
        onClick={handleClickButton}
      />

      <TermsSections data={privacyPolicyData} />

      <Footer mt="100px" />
    </Box>
  )
}
