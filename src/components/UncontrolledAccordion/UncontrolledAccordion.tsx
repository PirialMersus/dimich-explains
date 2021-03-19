import React, {useState} from "react";

type UncontrolledAccordionPropsType = {
    title: string
}

function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {
    const [collapsed, setCollapsed] = useState(false)
    return (
        <div>
            <AccordionTitle title={props.title} collapsed={collapsed} setCollapsed={setCollapsed}/>
            {!collapsed && <AccordionBody/>}
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
    setCollapsed: (value: boolean) => void
    collapsed: boolean
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={() => {props.setCollapsed(!props.collapsed)}}>{props.title}</h3>
}

export default UncontrolledAccordion