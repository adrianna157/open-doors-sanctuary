import React, { useState, Fragment, useContext } from "react"
import { Auth } from "aws-amplify"
import PageOne from './PageOne.js'
import PageTwo from './PageTwo.js'
import TermsModal from "./TermsModal.js";
import { AuthContext } from '../../helpers/AuthContext/AuthContext.js';
import randomWords from 'random-words'
import { NotificationContext } from "../../helpers/AlertContext/AlertContext.js";

const CreateAccount = (props) => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [alias, setAlias] = useState(randomWords())
  const [birthYear, setBirthYear] = useState("")
  const [location, setLocation] = useState("")
  const [country, setCountry] = useState("")
  // TODO: ask about the "How did you hear about us"
  // Trevor will supply source list, and there will be an other field that will allow users to input a source
  const [agreeToTerms, setAgreeToTerms] = useState(false)
  const [pageState, setPageState] = useState(props.initialPage ? props.initialPage : "page-one")
  const [state, dispatch] = useContext(AuthContext)
  const [alert, setAlert] = useContext(NotificationContext);

  const signUp = () => {
    Auth.signUp({
      username: email.toLowerCase(),
      password,
      attributes: {
        email: email.toLowerCase(),
        nickname: alias,
        given_name: firstName,
        family_name: lastName,
        birthdate: "??/??/" + birthYear,
        locale: location.abbreviation,
        'custom:status': 'pending'
     } })
      .then((data) => {
        setFirstName("")
        setLastName("")
        setConfirmPassword("")
        setBirthYear("")
        setLocation("")
        props.onStateChange("confirmSignUp", {
          email: email.toLowerCase(),
          setEmail: setEmail,
          alias: alias,
          setAlias: setAlias,
          password: password,
          setPassword: setPassword
        })
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

  if (props.authState === 'signUp') {
    switch (pageState) {
      case "page-one":
        return (
          <PageOne
            firstName={firstName} setFirstName={setFirstName}
            lastName={lastName} setLastName={setLastName}
            email={email} setEmail={setEmail}
            password={password} setPassword={setPassword}
            confirmPassword={confirmPassword} setConfirmPassword={setConfirmPassword}
            pageChange={setPageState} onStateChange={props.onStateChange}
          />
        )
      case "page-two":
        return (
          <PageTwo
            setFirstName={setFirstName} setLastName={setLastName}
            setEmail={setEmail} setPassword={setPassword}
            setConfirmPassword={setConfirmPassword}
            alias={alias} setAlias={setAlias}
            birthYear={birthYear} setBirthYear={setBirthYear}
            country={country} setCountry={setCountry}
            location={location} setLocation={setLocation}
            agreeToTerms={agreeToTerms} setAgreeToTerms={setAgreeToTerms}
            pageChange={setPageState} onStateChange={props.onStateChange}
            signUp={signUp}
          />
        )
      case "terms-of-use":
        return (
          <TermsModal
            pageChange={setPageState}
            onStateChange={props.onStateChange}
          ></TermsModal>
        );
      default:
        return (
          <PageOne
            firstName={firstName} setFirstName={setFirstName}
            lastName={lastName} setLastName={setLastName}
            email={email} setEmail={setEmail}
            password={password} setPassword={setPassword}
            confirmPassword={confirmPassword} setConfirmPassword={setConfirmPassword}
            pageChange={setPageState} onStateChange={props.onStateChange}
          />
        )
    }
  } else {
    return <Fragment></Fragment>
  }
}

export default CreateAccount
