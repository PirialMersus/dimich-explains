import React, {useState} from "react";
import s from "./OnOffControlled.module.css"

export type OnnOffControlledPropsType = {
    on: boolean
}

export function OnnOffControlled(props: OnnOffControlledPropsType) {

    const onStyle = {
        marginRight: "10px",
        display: "inline-block",
        width: "30px",
        height: "30px",
        border: "1px solid #111",
        backgroundColor: props.on ? "green" : "white"
    }
    const offStyle = {
        marginRight: "10px",
        display: "inline-block",
        width: "30px",
        height: "30px",
        border: "1px solid #111",
        backgroundColor: !props.on ? "red" : "white"
    }
    const circle = {
        marginRight: "10px",
        marginTop: "1px",
        display: "inline-block",
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        border: "1px solid #111",
        backgroundColor: props.on ? "green" : "red"
    }

    return (
        <div className={s.wrapper}>
            <div style={onStyle} >On</div>
            <div style={offStyle}>Off</div>
            <div style={circle}></div>
        </div>
    )
}