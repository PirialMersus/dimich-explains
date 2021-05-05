import {useEffect, useState} from "react";

const Clock = () => {
    const [time, setTime] = useState(`00 00 00`)

    useEffect(() => {
        setInterval(() => {
            let date = new Date()
            let hours = date.getHours()
            let minutes = date.getMinutes()
            let seconds = date.getSeconds()
            setTime(`Сейчас ${hours} часов ${minutes} минут ${seconds} секунд`)
        }, 1000)
    })
    return (
        <>
            <span>{time}</span>
        </>
    )
}
export default Clock