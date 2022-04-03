import React, { useState, Fragment, useContext } from "react"
import { Auth } from "aws-amplify"
import HeaderText from '../../components/HeaderText'
import Button from '../../components/Button'
import TextField from '../../components/TextField'
import Container from '../../components/Container';
import Page from '../../components/Page';
import { passwordValidator, confirmPasswordValidator } from '../../helpers/createAccount/fieldValidation.js'
import { NotificationContext } from "../../helpers/AlertContext/AlertContext.js";
import AlertHandler from "../../components/AlertHandler";

const ForgotPassword = (props) => {
  const [email, setEmail] = useState("")
  const [code, setCode] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [renderedCode, setRenderedCode] = useState(false)
  const [alert, setAlert] = useContext(NotificationContext);

  const sendCode = () => {
    if (email === "") {
      setAlert({
        type: "SET_NOTIFICATION",
        payload: {
          occurs: true,
          message: "Please enter an email",
          textColor: "redText",
          borderColor: "redBorder",
        },
      });
    } else {
      Auth.forgotPassword(email).then((data) => {
        setRenderedCode(true)
      }).catch((err) => {
        setAlert({
          type: "SET_NOTIFICATION",
          payload: {
            occurs: true,
            message: err.message,
            textColor: "redText",
            borderColor: "redBorder",
          },
        });
      });
    }
  }

  const resetPassword = () => {
    if (passwordValidator(setAlert, newPassword) && confirmPasswordValidator(setAlert, confirmPassword, newPassword)) {
      Auth.forgotPasswordSubmit(email, code, newPassword).then((data) => {
        setRenderedCode(false)
        setEmail("")
        setAlert({
          type: "SET_NOTIFICATION",
          payload: {
            occurs: true,
            message: "Your password was successfully changed!",
            textColor: "greenText",
            borderColor: "greenBorder",
          },
        });
        props.onStateChange("signIn")
      }).catch((err) => {
        setAlert({
          type: "SET_NOTIFICATION",
          payload: {
            occurs: true,
            message: err.message,
            textColor: "redText",
            borderColor: "redBorder",
          },
        });
      });
    }
  }

  const renderCode = () => {
    if (renderedCode) {
      return (
        <Fragment>
          <TextField
            type="code"
            onChange={(e) => setCode(e.target.value)}
            placeHolder="Code"
            label="Confirmation Code"
          />
          <TextField
            type="password"
            onChange={(e) => setNewPassword(e.target.value)}
            placeHolder="New Password"
            label="New Password"
          />
          <TextField
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeHolder="Confirm New Password"
            label="Confirm New Password"
          />
          <Button solidBlue className="mt-4" onClick={resetPassword}>
            Submit
          </Button>
          <div className="flex justify-end mt-4">
            <Button anchorTag onCLick={sendCode}>
              Resend Code
            </Button>
          </div>
        </Fragment>
      )
    }
  }

  const renderEmail = () => {
    if (!renderedCode) {
      return (
        <Fragment>
          <TextField
            type="Email"
            placeHolder="Email"
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button solidBlue className="mt-4" onClick={sendCode}>
            Send Code
          </Button>
        </Fragment>
      )
    }
  }

  return props.authState === "ForgotPassword" ? (
    <Page noLeftMargin>
      <AlertHandler />
      <Container
        grayedBackground
        height="h-91pr lg:h-63pr"
        width="w-96pr lg:w-35pr"
        padding="pt-3pr px-4pr"
        className="flex flex-col"
        margin="mx-auto"
        mariginTop="mt-h8pr lg:mt-h26pr"
      >
        <center><HeaderText noBold fontSize="text-4xl" className="pb-2pr">Forgot Password</HeaderText></center>
        {renderCode()}
        {renderEmail()}
      </Container>
    </Page>
  ) : (
    <Fragment></Fragment>
  )
}

export default ForgotPassword;
