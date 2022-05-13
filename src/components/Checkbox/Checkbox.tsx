import React, {ChangeEvent} from "react";

type CheckboxType = {
    value: boolean
    callBack: (newValue: boolean) => void
}

export const CheckboxMemo = (props: CheckboxType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.callBack(e.currentTarget.checked)
    }

    return (
        <div>
            <input type='checkbox' checked={props.value} onChange={onChangeHandler}/>
        </div>
    )
}

export const Checkbox = React.memo(CheckboxMemo)