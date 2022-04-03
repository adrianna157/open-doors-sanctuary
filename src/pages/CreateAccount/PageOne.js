import React, { useContext } from "react"
import { validatePageOne } from '../../helpers/createAccount/createAccountValidation.js'
import HeaderText from '../../components/HeaderText'
import Button from '../../components/Button'
import TextField from '../../components/TextField'
import Page from '../../components/Page'
import Container from '../../components/Container'
import { useNavigate } from "react-router-dom"
import { NotificationContext } from "../../helpers/AlertContext/AlertContext.js";
import AlertHandler from "../../components/AlertHandler/index.js"


const PageOne = (props) => {
  const [alert, setAlert] = useContext(NotificationContext);
  let navigate = useNavigate();
  let {
    firstName, setFirstName,
    lastName, setLastName,
    email, setEmail,
    password, setPassword,
    confirmPassword, setConfirmPassword,
    pageChange
  } = props

  return (
    <Page noLeftMargin>
      <AlertHandler />
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
          <HeaderText noBold fontSize="text-4xl" className="pb-2pr text-[#a26360]">
            Create an Account
          </HeaderText>
        </center>
        <div>
          <TextField
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeHolder="First Name"
            label="First Name"
            className="mb-4"
          />
          <TextField
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeHolder="Last Name"
            label="Last Name"
            className="mb-4"
          />
          <TextField
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeHolder="Email"
            label="Email"
            className="mb-4"
          />

          <TextField
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeHolder="Password"
            label="Password"
            className="mb-4"
            info="Your password must be 12 characters long, have at least one number, one upper case, one lower case, and one special character"
          />

          <TextField
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeHolder="Password"
            label="Confirm Password"
            className="mb-4pr"
          />
          <div className="flex justify-between mb-h2pr">
            <Button
              solidGreen
              noPadding
              className="w-20pr lg:w-6pr"
              onClick={() => {
                navigate(-1);
              }}
            >
              CANCEL
            </Button>
            <Button
              solidGreen
              noPadding
              className="w-20pr lg:w-6pr"
              onClick={() => {
                if (
                  validatePageOne(
                    setAlert,
                    firstName,
                    lastName,
                    email,
                    password,
                    confirmPassword
                  )
                ) {
                  pageChange("page-two");
                }
              }}
            >
              NEXT
            </Button>
          </div>
          <p className="flex justify-end mt-2 primary-blue-text">
            Already have an account?&nbsp;
            <Button
              anchorTag
              onClick={() => {
                setFirstName("");
                setLastName("");
                setEmail("");
                setPassword("");
                setConfirmPassword("");
                 navigate(-1);
              }}
            >
              Click Here
            </Button>
          </p>
        </div>
      </Container>
    </Page>
  );
}

export default PageOne
