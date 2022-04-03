import React, { useState, Fragment, useContext } from "react"
import { Auth, API, graphqlOperation } from "aws-amplify"
import { createUsers } from "../../graphql/mutations"
import HeaderText from '../../components/HeaderText'
import Button from '../../components/Button'
import TextField from '../../components/TextField'
import Container from '../../components/Container';
import Page from '../../components/Page';
import AuthHeader from "../../components/AuthHeader";
import AlertHandler from "../../components/AlertHandler";
import { AuthContext } from '../../helpers/AuthContext/AuthContext.js';
import { NotificationContext } from "../../helpers/AlertContext/AlertContext.js";

const ConfirmAccount = (props) => {
  const { authData } = props
  const [code, setCode] = useState("")
  const [state, dispatch] = useContext(AuthContext)
  const [alert, setAlert] = useContext(NotificationContext);

  const addUser = async (alias, uuid) => {
    try {
      var res = await API.graphql(graphqlOperation(createUsers, { input: {
        id: uuid,
        alias: alias,
        certification: "",
        heardAboutUs: ""
      } }))
      return res
    } catch (error) {
      setAlert({
        type: "SET_NOTIFICATION",
        payload: {
          occurs: true,
          message: error.message,
          textColor: "redText",
          borderColor: "redBorder",
        },
      });
    }
  }

  const signIn = () => {
    Auth.signIn({
      username: authData.email,
      password: authData.password,
    })
      .then((user) => {
        dispatch({type: 'SET_USER', payload: user})
        addUser(authData.alias, user.attributes.sub)
        authData.setAlias("")
        authData.setPassword("")
        props.onStateChange("signedIn", {})
      })
      .catch((err) => {
        setAlert({
          type: "SET_NOTIFICATION",
          payload: {
            occurs: true,
            message: err.message,
            textColor: "redText",
            borderColor: "redBorder",
          },
        });
      })
  }

  const confirmSignUp = () => {
    Auth.confirmSignUp(authData.email, code)
      .then((data) => {
        authData.setEmail("")
        setCode("")
        signIn()
      })
      .catch((error) => {
        setAlert({
          type: "SET_NOTIFICATION",
          payload: {
            occurs: true,
            message: error.message,
            textColor: "redText",
            borderColor: "redBorder",
          },
        });
      })
  }
  const resendCode = () => {
    Auth.resendSignUp(authData.email)
      .then(() => {
        console.log("code resent successfully")
      })
      .catch((error) => {
        setAlert({
          type: "SET_NOTIFICATION",
          payload: {
            occurs: true,
            message: error.message,
            textColor: "redText",
            borderColor: "redBorder",
          },
        });
      })
  }

  return props.authState === 'confirmSignUp' ? (
    <Page noLeftMargin>
      <AlertHandler></AlertHandler>
      <AuthHeader />
      <Container
        grayedBackground
        height="h-91pr lg:h-63pr"
        width="w-96pr lg:w-35pr"
        padding="pt-3pr px-4pr"
        className="flex flex-col"
        margin="mx-auto"
        mariginTop="mt-h8pr lg:mt-h26pr"
      >
        <center><HeaderText noBold fontSize="text-4xl" className="pb-2pr text-[#a26360]">Confirm Sign Up</HeaderText></center>
        <TextField
          type="code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeHolder="Code"
          label="Confirmation Code"
        />
        <Button solidBlue onClick={confirmSignUp} className="mt-4">
          Submit
        </Button>
        <div className="flex justify-end mt-4">
          <Button anchorTag onClick={resendCode}>
            Resend Code
          </Button>
        </div>
      </Container>
    </Page>
  ) : (<Fragment></Fragment>)
}

export default ConfirmAccount;
