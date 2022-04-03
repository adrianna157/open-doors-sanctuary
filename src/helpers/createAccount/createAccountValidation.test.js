import moment from 'moment'
import {
    validatePageOne,
    validatePageTwo
} from './createAccountValidation.js'

const initalAlertContext = {
    payload: {
        occurs: false,
    },
}
let alertContext = {...initalAlertContext}

const setAlert = (alertState) => {
    alertContext = alertState
}

describe('validatePageOne ->', () => {

    test('returns true if passed strings are valid', () => {
        const firstName = "hello"
        const lastName = "world"
        const email = "hello@world.com"
        const password = "Password-123"
        const confirmPassword = "Password-123"
    
        expect(validatePageOne(setAlert, firstName, lastName, email, password, confirmPassword)).toBeTruthy()
        expect(alertContext.payload.occurs).toBeFalsy()
        alertContext = {...initalAlertContext}
    })

    test('returns false if passed firstName is invalid', () => {
        const firstName = "hello1"
        const lastName = "world"
        const email = "hello@world.com"
        const password = "Password-123"
        const confirmPassword = "Password-123"
    
        expect(validatePageOne(setAlert, firstName, lastName, email, password, confirmPassword)).toBeFalsy()
        expect(alertContext.payload.occurs).toBeTruthy()
        alertContext = {...initalAlertContext}
    })

    test('returns false if passed lastName is invalid', () => {
        const firstName = "hello"
        const lastName = "world1"
        const email = "hello@world.com"
        const password = "Password-123"
        const confirmPassword = "Password-123"
    
        expect(validatePageOne(setAlert, firstName, lastName, email, password, confirmPassword)).toBeFalsy()
        expect(alertContext.payload.occurs).toBeTruthy()
        alertContext = {...initalAlertContext}
    })

    test('returns false if passed email is invalid', () => {
        const firstName = "hello"
        const lastName = "world"
        const email = "hello world"
        const password = "Password-123"
        const confirmPassword = "Password-123"
    
        expect(validatePageOne(setAlert, firstName, lastName, email, password, confirmPassword)).toBeFalsy()
        expect(alertContext.payload.occurs).toBeTruthy()
        alertContext = {...initalAlertContext}
    })

    test('returns false if passed password is invalid', () => {
        const firstName = "hello"
        const lastName = "world"
        const email = "hello world"
        const password = "password"
        const confirmPassword = "Password-123"
    
        expect(validatePageOne(setAlert, firstName, lastName, email, password, confirmPassword)).toBeFalsy()
        expect(alertContext.payload.occurs).toBeTruthy()
        alertContext = {...initalAlertContext}
    })

    test('returns false if passed confirmPassword is invalid', () => {
        const firstName = "hello"
        const lastName = "world"
        const email = "hello world"
        const password = "Password-123"
        const confirmPassword = "password"
    
        expect(validatePageOne(setAlert, firstName, lastName, email, password, confirmPassword)).toBeFalsy()
        expect(alertContext.payload.occurs).toBeTruthy()
        alertContext = {...initalAlertContext}
    })
  
})

describe('validatePageTwo ->', () => {

    test('returns true if passed strings are valid', () => {
        const birthYear = "2003"
        const location = "OR"
        const agreeToTerms = true
        const country = "US"
    
        expect(validatePageTwo(setAlert, birthYear, location, agreeToTerms, country)).toBeTruthy()
        expect(alertContext.payload.occurs).toBeFalsy()
        alertContext = {...initalAlertContext}
    })

    test('returns false if passed birthYear is invalid', () => {
        const birthYear = moment().format('YYYY')
        const location = "OR"
        const agreeToTerms = true
        const country = "US"
    
        expect(validatePageTwo(setAlert, birthYear, location, agreeToTerms, country)).toBeFalsy()
        expect(alertContext.payload.occurs).toBeTruthy()
        alertContext = {...initalAlertContext}
    })

    test('returns false if passed location is invalid', () => {
        const birthYear = "2003"
        const location = undefined
        const agreeToTerms = true
        const country = "US"
    
        expect(validatePageTwo(setAlert, birthYear, location, agreeToTerms, country)).toBeFalsy()
        expect(alertContext.payload.occurs).toBeTruthy()
        alertContext = {...initalAlertContext}
    })

    test('returns false if passed agreeToTerms is invalid', () => {
        const birthYear = "2003"
        const location = "OR"
        const agreeToTerms = false
        const country = "US"
    
        expect(validatePageTwo(setAlert, birthYear, location, agreeToTerms, country)).toBeFalsy()
        expect(alertContext.payload.occurs).toBeTruthy()
        alertContext = {...initalAlertContext}
    })

    test('returns false if passed country is invalid', () => {
        const birthYear = "2003"
        const location = "OR"
        const agreeToTerms = false
        const country = "CA"
    
        expect(validatePageTwo(setAlert, birthYear, location, agreeToTerms, country)).toBeFalsy()
        expect(alertContext.payload.occurs).toBeTruthy()
        alertContext = {...initalAlertContext}
    })
  
})