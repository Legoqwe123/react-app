import React from "react"
import ReactDOM from "react-dom"
import { RawIntlProvider } from "react-intl"
import { ThemeProvider } from "styled-components"
import { Switch, Route, Redirect, HashRouter } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import { intl } from "../src/i18n/i18n"
import { GlobalStyle, AppTheme } from "../src/theme/theme"
import { ScrollToTop } from "./core/ScrollToTop"
import {
  root,
  carLiability,
  comprehensiveCar,
  healthcare,
  feedback,
  sorry,
  payment,
  terms,
  privacyPolicy,
} from "./routes"
import { healthCompanies, healthForm } from "./healthcare/routes"
import {
  comprehensiveCarPrice,
  comprehensiveCarExtendedTerms,
  comprehensiveCarAdditionalInsurances,
  personalAccidentInsurance,
  comprehensiveCarCompanies,
  comprehensiveCarForm,
  comprehensiveCarInformation,
} from "./comprehensive-car/routes"
import {
  secondStep as carLiabilitySecondStep,
  results as carLiabilityResults,
  form as carLiabilityForm,
} from "./car-liability/routes"
import { MainPage } from "./main/main.page"
import { CarLiabilityPage } from "./car-liability/car-liability.page"
import { ComprehensiveCarPage } from "./comprehensive-car/comprehensive-car.page"
import { HealthcarePage } from "./healthcare/healthcare.page"
import { FeedbackPage } from "./feedback/feedback.page"
import { SorryPage } from "./sorry/sorry.page"
import { HealthCompanies } from "./healthcare/healthcare-tariffs.page"
import { HealthcareFormPage } from "./healthcare/healthcare-form.page"
import { ComprehensiveCarPricePage } from "./comprehensive-car/comprehensive-car-price.page"
import { ComprehensiveCarInfoPage } from "./comprehensive-car/comprehensive-car-info.page"
import { ComprehensiveCarExtendedTerms } from "./comprehensive-car/comprehensive-car-extended-terms.page"
import { ComprehensiveCarAdditionalInsurancesPage } from "./comprehensive-car/comprehensive-car-additional-insurances.page"
import { PersonalAccidentInsurancePage } from "./comprehensive-car/personal-accident-insurance.page"
import { ComprehensiveCarCompaniesPage } from "./comprehensive-car/comprehensive-car-companies.page"
import { ComprehensiveCarFormPage } from "./comprehensive-car/comprehesive-car-form.page"
import { PaymentPage } from "./payment/payment.page"
import { CarLiabilitySecondStepPage } from "./car-liability/car-liability-second-step.page"
import { TermsPage } from "./terms/terms.page"
import { CarLiabilityResultsPage } from "./car-liability/car-liability-results.page"
import { CarLiabilityFormPage } from "./car-liability/car-liability-form.page"
import "react-toastify/dist/ReactToastify.css"
import { PrivacyPolicyPage } from "./terms/privacy-policy.page"
import { RouteWithGtag } from "./ui/route-with-gtag"

declare global {
  interface Window {
    gtag: any
    fbq: any
  }
}

ReactDOM.render(
  <ThemeProvider theme={AppTheme}>
    <RawIntlProvider value={intl}>
      <HashRouter>
        <ScrollToTop />
        <ToastContainer
          draggable
          draggablePercent={25}
          position="bottom-right"
          autoClose={2000}
        />

        <Switch>
          <RouteWithGtag path={root} exact component={MainPage} />
          <RouteWithGtag path={terms} component={TermsPage} />
          <RouteWithGtag path={privacyPolicy} component={PrivacyPolicyPage} />

          <RouteWithGtag
            path={carLiability}
            exact
            component={CarLiabilityPage}
          />
          <RouteWithGtag
            path={carLiabilitySecondStep}
            component={CarLiabilitySecondStepPage}
          />
          <RouteWithGtag
            path={carLiabilityResults}
            component={CarLiabilityResultsPage}
          />
          <RouteWithGtag
            path={carLiabilityForm}
            component={CarLiabilityFormPage}
          />

          <RouteWithGtag
            path={comprehensiveCar}
            exact
            component={ComprehensiveCarPage}
          />
          <RouteWithGtag path={healthcare} exact component={HealthcarePage} />
          <RouteWithGtag path={feedback} component={FeedbackPage} />
          <RouteWithGtag path={sorry} component={SorryPage} />
          <RouteWithGtag path={payment} component={PaymentPage} />

          <RouteWithGtag path={healthCompanies} component={HealthCompanies} />
          <RouteWithGtag path={healthForm} component={HealthcareFormPage} />

          <RouteWithGtag
            path={comprehensiveCarInformation}
            component={ComprehensiveCarInfoPage}
          />

          <RouteWithGtag
            path={comprehensiveCarPrice}
            component={ComprehensiveCarPricePage}
          />

          <RouteWithGtag
            path={comprehensiveCarExtendedTerms}
            component={ComprehensiveCarExtendedTerms}
          />
          <RouteWithGtag
            path={comprehensiveCarAdditionalInsurances}
            component={ComprehensiveCarAdditionalInsurancesPage}
          />
          <RouteWithGtag
            path={personalAccidentInsurance}
            component={PersonalAccidentInsurancePage}
          />
          <RouteWithGtag
            path={comprehensiveCarCompanies}
            component={ComprehensiveCarCompaniesPage}
          />
          <RouteWithGtag
            path={comprehensiveCarForm}
            component={ComprehensiveCarFormPage}
          />

          <Route path="*">
            <Redirect to={root} />
          </Route>
        </Switch>

        <GlobalStyle />
      </HashRouter>
    </RawIntlProvider>
  </ThemeProvider>,
  document.getElementById("root"),
)
