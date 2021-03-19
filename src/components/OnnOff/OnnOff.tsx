import React, {useState} from "react";
import s from "./OnOff.module.css"

type PropsType = {
    on: boolean
}

function OnnOff(props: PropsType) {

    const [on, setOn] = useState(false)

    const onStyle = {
        marginRight: "10px",
        display: "inline-block",
        width: "30px",
        height: "30px",
        border: "1px solid #111",
        backgroundColor: on ? "green" : "white"
    }
    const offStyle = {
        marginRight: "10px",
        display: "inline-block",
        width: "30px",
        height: "30px",
        border: "1px solid #111",
        backgroundColor: !on ? "green" : "white"
    }
    const circle = {
        marginRight: "10px",
        marginTop: "1px",
        display: "inline-block",
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        border: "1px solid #111",
        backgroundColor: on ? "green" : "red"
    }

    return (
        <div className={s.wrapper}>
            <div style={onStyle} onClick={() => setOn(true)}>On</div>
            <div style={offStyle} onClick={() => setOn(false)}>Off</div>
            <div style={circle}></div>
        </div>
    )
}

export default OnnOff