import React, { useContext } from "react"
import { validatePageTwo } from '../../helpers/createAccount/createAccountValidation.js'
import HeaderText from '../../components/HeaderText'
import Button from '../../components/Button'
import TextField from '../../components/TextField'
import Page from '../../components/Page'
import Container from '../../components/Container'
import AuthHeader from '../../components/AuthHeader'
import DropDown from '../../components/DropDown'
import { NotificationContext } from "../../helpers/AlertContext/AlertContext.js";
import AlertHandler from "../../components/AlertHandler/index.js"

const PageTwo = (props) => {
  const [alert, setAlert] = useContext(NotificationContext);

  let {
    birthYear, setBirthYear,
    location, setLocation,
    agreeToTerms, setAgreeToTerms,
    pageChange, signUp,
    setFirstName, setLastName,
    setEmail, setPassword,
    setConfirmPassword,
    country, setCountry
  } = props

  const stateDropDownConditionalRender = () => {
    if (country.value === "US")  {
      return (
        <DropDown
          USAStates
          value={location}
          onChange={(value) => setLocation(value)}
          label="State"
          className="mb-4"
        />
      )
    }
  }



  return (
    <Page noLeftMargin>
      <AlertHandler />
      <AuthHeader />
      <Container
        grayedBackground
        height="md:h-[32rem] sm:h-1/6 lg:h-63pr"
        width="md:w-[32rem] sm:w-1/6 lg:w-1/3"
        padding="pt-3pr px-4pr sm:pl-2"
        className="flex flex-col"
        margin=" ml-16"
        mariginTop="mt-24 lg:mt-h26pr"
      >
        <center>
          <HeaderText noBold fontSize="text-4xl" className="pb-2pr">
            Create an Account
          </HeaderText>
        </center>
        <div>
          <TextField
            value={birthYear}
            onChange={(e) => setBirthYear(e.target.value)}
            placeHolder="YYYY"
            label="Birth Year"
            className="mb-4"
          />
          <DropDown
            Country
            value={country}
            onChange={(value) => setCountry(value)}
            label="Country"
            className="mb-4"
          />
          {stateDropDownConditionalRender()}
          <div className="flex justify-start my-3pr">
            <TextField
              noRounded
              noFullFieldWidth
              fieldWidth="w-5"
              fieldHeight="h-5"
              width="w-5"
              type="checkbox"
              checked={agreeToTerms}
              onChange={(e) => {
                setAgreeToTerms(e.target.checked);
              }}
            />
            <p className="mx-2 primary-blue-text">
              I agree to the&nbsp;
              <Button
                anchorTag
                onClick={() => {
                  pageChange("terms-of-use");
                }}
              >
                Terms of Use
              </Button>
            </p>
          </div>
          <div className="flex justify-between mt-h4pr">
            <Button
              linedBlue
              noPadding
              className="w-20pr lg:w-6pr"
              onClick={() => {
                setBirthYear("");
                setLocation("");
                setAgreeToTerms("");
                setFirstName("");
                setLastName("");
                setEmail("");
                setPassword("");
                setConfirmPassword("");
                pageChange("page-one");
                props.onStateChange("signIn", {});
              }}
            >
              CANCEL
            </Button>
            <Button
              solidBlue
              noPadding
              className="w-20pr lg:w-6pr"
              onClick={() => {
                if (
                  validatePageTwo(
                    setAlert,
                    birthYear,
                    location.abbreviation,
                    agreeToTerms,
                    country.value,
                    country.label
                  )
                ) {
                  signUp();
                }
              }}
            >
              SUBMIT
            </Button>
          </div>
        </div>
      </Container>
    </Page>
  );
}

export default PageTwo
