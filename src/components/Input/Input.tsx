import React, {ChangeEvent} from "react";

type InputPropsType = {
    value: string
    callBack: (newValue: string) => void
}

export const Input = (props : InputPropsType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.callBack(e.currentTarget.value)
    }

    return (
        <div>
            <input value={props.value} onChange={onChangeHandler}/> {props.value}
        </div>
    )
}