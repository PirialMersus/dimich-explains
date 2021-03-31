import React from "react";
import s from './Select.module.css'
import {debuglog, log} from "util";

type ItemType = {
    title: string
    value: number | string
}

export type SelectPropsType = {
    items: ItemType[]
    value: any
    isSelectCollapsed: boolean
    setIsSelectCollapsed: (isCollapsed: boolean) => void
}

export function Select(props: SelectPropsType) {
    const onClickHandler = () => {
        props.setIsSelectCollapsed(false)
    }
    // debugger
    if (!props.isSelectCollapsed) {
    return (
                <div>
            {props.items.map((i, index) => {
                return (
                    <div key={index} onClick={() => props.setIsSelectCollapsed(true)}>{i.title}</div>
                )
            })}
        </div>
    )} else {
        return (
            <div onClick={onClickHandler}>{props.items[props.value-1].title}</div>
        )
    }
}
export default Select

