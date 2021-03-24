import React, {ChangeEvent, ChangeEventHandler, createRef, useRef, useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story, Meta} from '@storybook/react/types-6-0';

import {Button, ButtonProps} from './Button';

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


