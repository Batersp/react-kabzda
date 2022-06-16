import React from "react";
import {ClockPropsType} from "./Clock";

export const DigitalClockView = (props: ClockPropsType) => {
    const myFn = (number: number) => number < 10 ? '0' + number : number
    return (
        <div>
            {props.date.getHours()}:
            {myFn(props.date.getMinutes())}:
            {myFn(props.date.getSeconds())}

        </div>
    )
}