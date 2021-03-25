import React, {ChangeEvent, useRef, useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Meta} from '@storybook/react/types-6-0';
import {action} from "@storybook/addon-actions";

export default {
    title: 'input'
    // component: Button,
} as Meta;

export const UncontrolledInput = () => <input/>;
export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('')
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value)
    }
    return <><input onChange={onChangeHandler}/> - {value}</>;
}
export const ControlledInputWithFixedValue = () => <input value="YogaDharmaSamadhi"/>;
export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }
    return <>
        <input ref={inputRef}/>
        <button onClick={save}>Save
        </button>
        actual value - {value}
    </>;
}

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('')
    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value
        setParentValue(value)
    }
    return <input value={parentValue} onChange={onChangeInput}/>

}
export const ControlledCheckBox = () => {
    const [checkboxValue, setCheckboxValue] = useState(true)
    const onChangeCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.checked
        setCheckboxValue(value)
    }
    return <input type="checkbox" checked={checkboxValue} onChange={onChangeCheckbox}/>
}
export const ControlledSelect = () => {
    const [selectValue, setSelectValue] = useState<string | undefined>(undefined)
    const onChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        const value = e.currentTarget.value
        setSelectValue(value)
    }
    return <select value={selectValue} onChange={onChangeSelect}>
        <option>none</option>
        <option value="1">Minsk</option>
        <option value="2">Moscow</option>
        <option value="3">Kiev</option>
    </select>
}
