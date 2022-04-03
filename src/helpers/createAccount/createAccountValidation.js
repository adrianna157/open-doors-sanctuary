import {
  nameValidator,
  emailValidator,
  passwordValidator,
  birthYearValidator,
  confirmPasswordValidator,
} from './fieldValidation.js'

export const validatePageOne = (setAlert, firstName, lastName, email, password, confirmPassword) => {
  let firstNameValidation = nameValidator(setAlert, firstName)
  let lastNameValidation = nameValidator(setAlert, lastName)
  let emailValidation = emailValidator(setAlert, email)
  let passwordValidation = passwordValidator(setAlert, password)
  let confirmPasswordValidation = confirmPasswordValidator(setAlert, confirmPassword, password)

  return firstNameValidation && lastNameValidation && emailValidation && passwordValidation && confirmPasswordValidation
}

export const validatePageTwo = (setAlert, birthYear, location, agreeToTerms) => {
  let birthYearValidation = birthYearValidator(setAlert, birthYear)



  if (!agreeToTerms) {
    setAlert({
      type: "SET_NOTIFICATION",
      payload: {
        occurs: true,
        message: "Please read and accept the terms and conditions",
        textColor: "redText",
        borderColor: "redBorder",
      },
  });
  }

  return birthYearValidation && agreeToTerms
}
