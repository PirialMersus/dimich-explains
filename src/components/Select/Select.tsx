import React from "react";
import s from './Select.module.css'
import {log} from "util";

type ItemType = {
    title: string
    value: number
}

export type SelectPropsType = {
    items: ItemType[]
    value?: any
    isSelectCollapsed: boolean
    setIsSelectCollapsed: (isCollapsed: boolean) => void
    setValue: (value: number) => void
}

export function Select(props: SelectPropsType) {
    const onMouseLeave = () => props.setIsSelectCollapsed(true)
    const onClickCollapseHandler = () => {
        props.setIsSelectCollapsed(false)
        console.log("dfsdfsdfsdf")
    }
    const onClickUncollapseHandler = (value: number) => {
        props.setIsSelectCollapsed(true)
        props.setValue(value)
    }
    // debugger
    return (
        <div className={s.selectWrapper}>
            {!props.isSelectCollapsed ?
                <div
                    className={s.selectItemsWrapper}
                    onMouseLeave={onMouseLeave}
                >
                    {props.items.map((i, index) => {
                        return (
                            <div
                                className={s.selectItems}
                                key={index}
                                onBlur={e => {
                                    onClickCollapseHandler()
                                }}
                                onClick={() => {
                                    onClickUncollapseHandler(i.value)
                                }}
                            >
                                {i.title}
                            </div>
                        )
                    })}
                </div> :
                <div className={s.selectItemMain}
                     onClick={onClickCollapseHandler}>{props.items[props.value - 1].title}</div>}
        </div>
    )

}

export default Select
