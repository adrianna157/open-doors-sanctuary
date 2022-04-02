import {
    nameValidator,
    emailValidator,
    passwordValidator,
    confirmPasswordValidator,
    locationValidator,
    birthYearValidator,
    countryValidator
} from './fieldValidation.js'

const initalAlertContext = {
    payload: {
        occurs: false,
    },
}
let alertContext = {...initalAlertContext}

const setAlert = (alertState) => {
    alertContext = alertState
}

describe('nameValidator ->', () => {

    test('returns true if passed string is not empty and does not contains numbers', () => {
      const name = "First"
  
      expect(nameValidator(setAlert, name)).toBeTruthy()
      expect(alertContext.payload.occurs).toBeFalsy()
      alertContext = {...initalAlertContext}
    })
  
    test('returns false if passed string is empty', () => {
      const name = ""
  
      expect(nameValidator(setAlert, name)).toBeFalsy()
      expect(alertContext.payload.occurs).toBeTruthy()
      alertContext = {...initalAlertContext}
    })

    test('returns false if passed string that contains number', () => {
        const name = "w0rld"
    
        expect(nameValidator(setAlert, name)).toBeFalsy()
        expect(alertContext.payload.occurs).toBeTruthy()
        alertContext = {...initalAlertContext}
      })
  
  })

describe('emailValidator ->', () => {

    test('returns true if passed string is not empty and is a valid email', () => {
      const email = "hello@world.com"
  
      expect(emailValidator(setAlert, email)).toBeTruthy()
      expect(alertContext.payload.occurs).toBeFalsy()
      alertContext = {...initalAlertContext}
    })
  
    test('returns false if passed string is empty', () => {
        const email = ""
    
        expect(emailValidator(setAlert, email)).toBeFalsy()
        expect(alertContext.payload.occurs).toBeTruthy()
        alertContext = {...initalAlertContext}
    })

    test('returns false if passed string is not a valid email', () => {
        const email = "hello world"

        expect(emailValidator(setAlert, email)).toBeFalsy()
        expect(alertContext.payload.occurs).toBeTruthy()
        alertContext = {...initalAlertContext}
    })
  
})

describe('passwordValidator ->', () => {

    test('returns true if passed string is not empty, has a length greater than 11, contains upper, conatins lower, contains special, contains number', () => {
        const password = "Password-123"

        expect(passwordValidator(setAlert, password)).toBeTruthy()
        expect(alertContext.payload.occurs).toBeFalsy()
        alertContext = {...initalAlertContext}
    })

    test('returns false if passed string is empty', () => {
        const password = ""

        expect(passwordValidator(setAlert, password)).toBeFalsy()
        expect(alertContext.payload.occurs).toBeTruthy()
        alertContext = {...initalAlertContext}
    })

    test('returns false if passed string is not greater than 11 in length', () => {
        const password = "Password-12"

        expect(passwordValidator(setAlert, password)).toBeFalsy()
        expect(alertContext.payload.occurs).toBeTruthy()
        alertContext = {...initalAlertContext}
    })

    test('returns false if passed string does not contain a upper case character', () => {
        const password = "password-123"

        expect(passwordValidator(setAlert, password)).toBeFalsy()
        expect(alertContext.payload.occurs).toBeTruthy()
        alertContext = {...initalAlertContext}
    })

    test('returns false if passed string does not contain a lower case character', () => {
        const password = "PASSWORD-123"

        expect(passwordValidator(setAlert, password)).toBeFalsy()
        expect(alertContext.payload.occurs).toBeTruthy()
        alertContext = {...initalAlertContext}
    })

    test('returns false if passed string does not contain a special character', () => {
        const password = "Password123"

        expect(passwordValidator(setAlert, password)).toBeFalsy()
        expect(alertContext.payload.occurs).toBeTruthy()
        alertContext = {...initalAlertContext}
    })

    test('returns false if passed string does not contain a number', () => {
        const password = "Password-one"

        expect(passwordValidator(setAlert, password)).toBeFalsy()
        expect(alertContext.payload.occurs).toBeTruthy()
        alertContext = {...initalAlertContext}
    })

})

describe('confirmPasswordValidator ->', () => {

    test('returns true if passed strings are not empty and match', () => {
      const password = "Password-123"
      const passwordConfirm = "Password-123"
  
      expect(confirmPasswordValidator(setAlert, passwordConfirm, password)).toBeTruthy()
      expect(alertContext.payload.occurs).toBeFalsy()
      alertContext = {...initalAlertContext}
    })
  
    test('returns false if passed strings are empty', () => {
        const password = ""
        const passwordConfirm = ""
    
        expect(confirmPasswordValidator(setAlert, passwordConfirm, password)).toBeFalsy()
        expect(alertContext.payload.occurs).toBeTruthy()
        alertContext = {...initalAlertContext}
    })

    test('returns false if passed strings do not match', () => {
        const password = "Password-123"
        const passwordConfirm = "hello world"

        expect(confirmPasswordValidator(setAlert, passwordConfirm, password)).toBeFalsy()
        expect(alertContext.payload.occurs).toBeTruthy()
        alertContext = {...initalAlertContext}
    })
  
})

describe('locationValidator ->', () => {

    test('returns true if passed string is not empty', () => {
      const location = "OR"
  
      expect(locationValidator(setAlert, location)).toBeTruthy()
      expect(alertContext.payload.occurs).toBeFalsy()
      alertContext = {...initalAlertContext}
    })
  
    test('returns false if passed string is undefined', () => {
        const location = undefined
    
        expect(locationValidator(setAlert, location)).toBeFalsy()
        expect(alertContext.payload.occurs).toBeTruthy()
        alertContext = {...initalAlertContext}
    })
  
})

describe('birthYearValidator ->', () => {

    test('returns true if passed string is not empty, has a length of 4, contains letters, the date is 18 or more years ago', () => {
      const birthYear = "2003"
  
      expect(birthYearValidator(setAlert, birthYear)).toBeTruthy()
      expect(alertContext.payload.occurs).toBeFalsy()
      alertContext = {...initalAlertContext}
    })
  
    test('returns false if passed string is empty', () => {
        const birthYear = ""
    
        expect(birthYearValidator(setAlert, birthYear)).toBeFalsy()
        expect(alertContext.payload.occurs).toBeTruthy()
        alertContext = {...initalAlertContext}
    })

    test('returns false if passed string has a length not equal to 4', () => {
        const birthYear = "20003"
    
        expect(birthYearValidator(setAlert, birthYear)).toBeFalsy()
        expect(alertContext.payload.occurs).toBeTruthy()
        alertContext = {...initalAlertContext}
    })
  
    test('returns false if passed string contains letters', () => {
        const birthYear = "2oo3"
    
        expect(birthYearValidator(setAlert, birthYear)).toBeFalsy()
        expect(alertContext.payload.occurs).toBeTruthy()
        alertContext = {...initalAlertContext}
    })

    test('returns false if passed strings date is less than 18 years ago', () => {
        const birthYear = "2021"
    
        expect(birthYearValidator(setAlert, birthYear)).toBeFalsy()
        expect(alertContext.payload.occurs).toBeTruthy()
        alertContext = {...initalAlertContext}
    })
    
})

describe('countryValidator ->', () => {

    test('returns true if passed string is not empty and is US', () => {
      const country = "US"
  
      expect(countryValidator(setAlert, country)).toBeTruthy()
      expect(alertContext.payload.occurs).toBeFalsy()
      alertContext = {...initalAlertContext}
    })
  
    test('returns false if passed string is empty', () => {
        const country = ""
    
        expect(countryValidator(setAlert, country)).toBeFalsy()
        expect(alertContext.payload.occurs).toBeTruthy()
        alertContext = {...initalAlertContext}
    })
  
    test('returns false if passed string is not US', () => {
        const country = "CA"
    
        expect(countryValidator(setAlert, country)).toBeFalsy()
        expect(alertContext.payload.occurs).toBeTruthy()
        alertContext = {...initalAlertContext}
    })

})
