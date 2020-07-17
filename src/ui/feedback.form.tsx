import React, { ReactElement } from "react"
import { Formik, FormikHelpers } from "formik"
import { FeedbackView } from "./feedback-view"
import { Box, BoxProps } from "./box"
import { FeedbackSchema } from "../validation-schema/feedback.schema"
import { toast } from "react-toastify"
import { t } from "../i18n/i18n"
import { useLocation } from "react-router-dom"
import { gtagSendFeedback } from "../core/gtag"

interface FeedbackProps {
  email: string
  message: string
}

export const FeedbackForm = ({ ...rest }: BoxProps): ReactElement => {
  const location = useLocation()

  const initialValues = {
    email: "",
    message: "",
  }

  const handleSubmitAsync = async (
    values: FeedbackProps,
    actions: FormikHelpers<FeedbackProps>,
  ): Promise<void> => {
    toast.success(t("general.success"))

    const formData = new FormData()
    formData.append("email", values.email)
    formData.append("comments", values.message)

    try {
      await fetch(`/feedback.php`, {
        method: "POST",
        body: formData,
      })

      gtagSendFeedback(location.pathname)

      actions.resetForm()
      actions.setStatus({ success: true })
      actions.setSubmitting(false)
    } catch {
      toast.error(t("general.smthWentWrong"))
    }
  }

  return (
    <Box {...rest}>
      <Formik
        validationSchema={FeedbackSchema}
        initialValues={initialValues}
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={handleSubmitAsync}
        component={FeedbackView}
      />
    </Box>
  )
}
