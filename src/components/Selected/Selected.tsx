import React, {ChangeEvent} from "react";

type SelectedPropsType = {
    value: string | undefined
    callBack: (newValue: string) => void
}

export const Selected = (props: SelectedPropsType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        props.callBack(e.currentTarget.value)
    }

    return (
        <div>
            <select value={props.value} onChange={onChangeHandler}>
            <option value='1'>nothing</option>
            <option value='2'>BMW</option>
            <option value='3'>AUDI</option>
            <option value='4'>TOYOTA</option>
            </select>
        </div>
    )
}