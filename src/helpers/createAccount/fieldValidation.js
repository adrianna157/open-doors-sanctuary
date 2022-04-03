import {
    ifEmpty,
    ifContainNumbers,
    ifOnlyContainsNumbers,
    ifEmail, ifLengthIsLessThan,
    ifContainsUpperCase,
    ifContainsLowerCase,
    ifContainsSpecialCharacters,
    ifLengthIs,
    ifFieldValuesMatch,
    ifYearAgoIs
} from '../validationHelpers.js'

export const nameValidator = (setAlert, name) => {
    let nameEmpty = ifEmpty(name)
    let nameContainsNumbers = ifContainNumbers(name)

    if (nameEmpty) {
        setAlert({
            type: "SET_NOTIFICATION",
            payload: {
              occurs: true,
              message: "Please enter a name",
              textColor: "redText",
              borderColor: "redBorder",
            },
          });
    } else if (nameContainsNumbers) {
        setAlert({
            type: "SET_NOTIFICATION",
            payload: {
              occurs: true,
              message: "Your name cannot contain numbers",
              textColor: "redText",
              borderColor: "redBorder",
            },
          });
    }

    return !nameEmpty && !nameContainsNumbers
}
export const emailValidator = (setAlert, email) => {
    let emailEmpty = ifEmpty(email)
    let validEmail = ifEmail(email)

    if (emailEmpty) {
        setAlert({
            type: "SET_NOTIFICATION",
            payload: {
              occurs: true,
              message: "Please enter an email",
              textColor: "redText",
              borderColor: "redBorder",
            },
        });
    } else if (!validEmail) {
        setAlert({
            type: "SET_NOTIFICATION",
            payload: {
              occurs: true,
              message: "Please enter a valid email",
              textColor: "redText",
              borderColor: "redBorder",
            },
        });
    }

    return !emailEmpty && validEmail
}
export const passwordValidator = (setAlert, password) => {
    let passwordEmpty = ifEmpty(password)
    let passwordLength = ifLengthIsLessThan(password.length, 12)
    let passwordHasNumber = ifContainNumbers(password)
    let passwordHasUpperCase = ifContainsUpperCase(password)
    let passwordHasLowerCase = ifContainsLowerCase(password)
    let passwordHasSpecialCharacter = ifContainsSpecialCharacters(password)

    if (passwordEmpty) {
        setAlert({
            type: "SET_NOTIFICATION",
            payload: {
              occurs: true,
              message: "Please enter a password",
              textColor: "redText",
              borderColor: "redBorder",
            },
          });
    } else if (passwordLength ||
        !passwordHasNumber || !passwordHasUpperCase ||
        !passwordHasLowerCase || !passwordHasSpecialCharacter) {
        setAlert({
            type: "SET_NOTIFICATION",
            payload: {
              occurs: true,
              message: "Your password must be 12 characters long, have at least one number, one upper case, one lower case, and one special character",
              textColor: "redText",
              borderColor: "redBorder",
            },
          });
    }

    return !passwordEmpty && !passwordLength &&
        passwordHasNumber && passwordHasUpperCase &&
        passwordHasLowerCase && passwordHasSpecialCharacter
}
export const confirmPasswordValidator = (setAlert, confirmPassword, password) => {
    let confirmPasswordEmpty = ifEmpty(confirmPassword)
    let passwordsMatch = ifFieldValuesMatch(password, confirmPassword)

    if (confirmPasswordEmpty) {
        setAlert({
            type: "SET_NOTIFICATION",
            payload: {
              occurs: true,
              message: "Please enter your password confirmation",
              textColor: "redText",
              borderColor: "redBorder",
            },
        });
    } else if (!passwordsMatch) {
        setAlert({
            type: "SET_NOTIFICATION",
            payload: {
              occurs: true,
              message: "Your passwords do not match",
              textColor: "redText",
              borderColor: "redBorder",
            },
        });
    }

    return !confirmPasswordEmpty && passwordsMatch
}
export const locationValidator = (setAlert, location) => {
    let locationEmpty = ifFieldValuesMatch(location, undefined)

    if (locationEmpty) {
        setAlert({
            type: "SET_NOTIFICATION",
            payload: {
              occurs: true,
              message: "Please enter a state",
              textColor: "redText",
              borderColor: "redBorder",
            },
        });
    }

    return !locationEmpty
}
export const birthYearValidator = (setAlert, birthYear) => {
    let birthYearEmpty = ifEmpty(birthYear)
    let birthYearLength = ifLengthIs(birthYear.length, 4)
    let birthYearHasNoLetters = ifOnlyContainsNumbers(birthYear)
    let birthYearGreaterThan18 = false

    if (!birthYearEmpty && birthYearHasNoLetters) {
        birthYearGreaterThan18 = ifYearAgoIs(birthYear, 18)
    }

    if (birthYearEmpty) {
        setAlert({
            type: "SET_NOTIFICATION",
            payload: {
              occurs: true,
              message: "Please enter your birth year",
              textColor: "redText",
              borderColor: "redBorder",
            },
        });
    } else if (!birthYearLength) {
        setAlert({
            type: "SET_NOTIFICATION",
            payload: {
              occurs: true,
              message: "Please enter your birth year in YYYY formate",
              textColor: "redText",
              borderColor: "redBorder",
            },
        });
    } else if (!birthYearHasNoLetters) {
        setAlert({
            type: "SET_NOTIFICATION",
            payload: {
              occurs: true,
              message: "Please only enter numbers for your birth year",
              textColor: "redText",
              borderColor: "redBorder",
            },
        });
    } else if (!birthYearGreaterThan18) {
        setAlert({
            type: "SET_NOTIFICATION",
            payload: {
              occurs: true,
              message: "You must be 18 to sign up for this app",
              textColor: "redText",
              borderColor: "redBorder",
            },
        });
    }

    return !birthYearEmpty && birthYearLength && birthYearHasNoLetters && birthYearGreaterThan18
}
export const countryValidator = (setAlert, country, countryName) => {
    let countryEmpty = ifFieldValuesMatch(country, undefined)
    let countryIsUS = ifFieldValuesMatch(country, "US")

    if (countryEmpty) {
        setAlert({
            type: "SET_NOTIFICATION",
            payload: {
              occurs: true,
              message: "Please enter a country",
              textColor: "redText",
              borderColor: "redBorder",
            },
        });
    } else if (!countryIsUS) {
        setAlert({
            type: "SET_NOTIFICATION",
            payload: {
              occurs: true,
              message: "This application is not supported in " + countryName,
              textColor: "redText",
              borderColor: "redBorder",
            },
        });
    }

    return !countryEmpty && countryIsUS
}