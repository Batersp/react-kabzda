import React, {useRef, useState} from "react";

export const UncontrolledInput = () => {

    const[value, setValue] = useState('')
    const inputElement = useRef<HTMLInputElement>(null)

    const onButtonClickHandler = () => {
       const el = inputElement.current as HTMLInputElement
        setValue(el.value)
    }



    return (
        <div>
            <input ref={inputElement}/> <button onClick={onButtonClickHandler}>save</button> actualValue: {value}
        </div>
    )
}


