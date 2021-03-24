import React from "react";

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
}

export function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle
                title={props.title}
                color={props.color}
            />
            {!props.collapsed && <AccordionBody/>}
        </div>

    )
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
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