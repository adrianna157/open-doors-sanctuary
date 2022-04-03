import moment from 'moment'

export const ifEmpty = (fieldValue) => {
    return (fieldValue === "")
}
export const ifEmptyObj = (fieldValue) => {
    for (const key of Object.keys(fieldValue)) {
        if (fieldValue[key]) {
            return false
        }
    } 
    return true
}
export const ifContainNumbers = (fieldValue) => {
    return /\d/.test(fieldValue)
}
export const ifOnlyContainsNumbers = (fieldValue) => {
    return /^\d+$/.test(fieldValue)
}
export const ifEmail = (fieldValue) => {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(fieldValue)
}
export const ifLengthIsLessThan = (fieldValue, length) => {
    return (fieldValue < length)
}
export const ifLengthIs = (fieldValue, length) =>  {
    return (fieldValue === length)
}
export const ifContainsUpperCase = (fieldValue) => {
    return /[A-Z]/g.test(fieldValue)
}
export const ifContainsLowerCase = (fieldValue) =>  {
    return /[a-z]/g.test(fieldValue)
}
export const ifContainsSpecialCharacters = (fieldValue) => {
    return /[~`!#$%^&*+=\-[\]\\';,/{}|\\":<>?]/g.test(fieldValue)
}
export const ifFieldValuesMatch = (fieldValue1, fieldValue2) => {
    return (fieldValue1 === fieldValue2)
}
export const ifYearAgoIs = (year, yearsAgo) => {
    return (parseInt(moment().format('YYYY')) - year) >= yearsAgo
}