import React from "react";

type ItemType = {
    title: string
    value: any
}

export type AccordionPropsType = {
    title: string
    /**
     Is menu collapsed or not
     */
    collapsed: boolean
    /**
     * Optional color of header text
     */
    color?: string
    items: ItemType[]
}

export function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle
                title={props.title}
                color={props.color}
            />
            {!props.collapsed && <AccordionBody items={props.items}/>}
        </div>

    )
}

export type AccordionBodyPropsType = {
    items: ItemType[]
}

function AccordionBody(props: AccordionBodyPropsType) {
    return (
        <ul>
            {props.items.map((item, index) => {
                return <li key={index}>{item.title}</li>
            })}
        </ul>
    )
}

type AccordionTitlePropsType = {
    title: string
    color?: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3
            style={{color: props.color ? props.color : 'black'}}>{props.title}
        </h3>
    )
}