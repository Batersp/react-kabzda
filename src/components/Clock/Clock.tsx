import React, {useEffect, useState} from "react";
import {DigitalClockView} from "./DigitalClockView";
import {AnalogClockView} from "./AnalogClockView";

export type ClockPropsType = {
    date: Date
}

export type MainClockType = {
    mode: 'Digital' | 'Analog'
}

export const Clock = (props: MainClockType) => {

    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date)
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [])

    let view
    switch (props.mode) {
        case "Digital": {
            view = <DigitalClockView date={date}/>
            break
        }
        case "Analog":
        default:
            view = <AnalogClockView date={date}/>
    }

    return (
        <>
        {view}
        </>
    )
}