import React, { ReactElement } from "react"
import { HeaderPage } from "../ui/header.page"
import { Box } from "../ui/box"
import { Footer } from "../ui/footer/footer"
import { TermsHeader } from "./ui/terms-header"
import { TermsSections } from "./ui/terms-sections"
import { Button } from "../ui/buttons/button"
import { t } from "../i18n/i18n"
import { useHistory } from "react-router-dom"
import { privacyPolicy } from "../routes"
import { termsData } from "./terms-data"

export const TermsPage = (): ReactElement => {
  const history = useHistory()

  const handleClickButton = (): void => history.push(privacyPolicy)

  return (
    <Box>
      <HeaderPage />

      <TermsHeader
        title={t("terms.title", {
          0: <Box as="br" key="br" />,
        })}
        lastUpdate={t("terms.lastUpdate")}
        buttonText={t("copyRight.privacyPolicy")}
        handleClick={handleClickButton}
      />

      <Button
        variant="outline"
        width="315px"
        display={["flex", "flex", "none"]}
        justifyContent="center"
        mx="auto"
        mt="40px"
        text={t("copyRight.privacyPolicy")}
        onClick={handleClickButton}
      />

      <TermsSections data={termsData} />

      <Footer mt="100px" />
    </Box>
  )
}
