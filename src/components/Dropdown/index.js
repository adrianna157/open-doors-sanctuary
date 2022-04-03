import React, { useState } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'
import states from 'states-us';

const DropDown = (props) => {
    const { 
        label, width, height, className, 
        noFullFieldWidth, noRounded, fieldHeight,
        fieldWidth, fieldPadding, fieldClassName,
        onChange, value, USAStates, Country, options
    } = props

    const [widthStyle] = useState(width ? width : "w-full")
    const [heightStyle] = useState(height ? " " + height : "")
    const [classNameStyle] = useState(className ? " " + className : "")
    const [noFullFieldWidthStyle] = useState(noFullFieldWidth ? "" : " w-full")
    const [noRoundedStyle] = useState(noRounded ? "" : " rounded")
    const [fieldHeightStyle] = useState(fieldHeight ? " " + fieldHeight : " h-4pr")
    const [fieldWidthStyle] = useState(fieldWidth ? " " + fieldWidth : "")
    const [fieldPaddingStyle] = useState(fieldPadding ? " " + fieldPadding : "")
    const [fieldClassNameStyle] = useState(fieldClassName ? " " + fieldClassName : "")
    const [optionsAttribute] = useState(
        options ? options : 
            Country ? countryList().getData() :
                USAStates ? states :
                    []
    )

    const [labelComponent] = useState(label ? <p className="light-primary-blue-text font-light mb-1">{label}</p> : "")

    return (
        <div className={widthStyle + heightStyle + classNameStyle}>
            {labelComponent}
            <Select 
                options={optionsAttribute} value={value} onChange={onChange} 
                className={
                    noFullFieldWidthStyle + noRoundedStyle + 
                    fieldHeightStyle + fieldWidthStyle + 
                    fieldPaddingStyle + fieldClassNameStyle
                }
                getOptionLabel ={(option)=>option[USAStates ? "name" : "label"]}
                getOptionValue ={(option)=>option[USAStates ? "abbreviation" : "value"]}
            />
        </div>
    )
}

export default DropDown