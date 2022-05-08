import React, {ChangeEvent, useState} from "react";

export type ItemsType = {
    name: string
    value: string
    hobbies: string[]
}

export type NewSelectedPropsType = {
    item:ItemsType[]
    value: string | undefined
    callBack: (value: string) => void
}


export const NewSelected = (props: NewSelectedPropsType) => {
    const [collapsedUsers, setCollapsedUsers] = useState(false)

    const onClickHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        props.callBack(e.currentTarget.value)
    }


    const onSpanClickHandler = () => {
        setCollapsedUsers(!collapsedUsers)
    }

    return (
        <div>

            <div> <span onClick={onSpanClickHandler}>USERS</span></div>
            {collapsedUsers
                ? <select onChange={onClickHandler} value={props.value}>
                    {props.item.map((el, index) => <option value={el.value} key={index}>{el.name}</option>)}
                </select>
                : <div>
                    <select onChange={onClickHandler} value={props.value}>
                        {props.item.map((el, index) => <option value={el.value} key={index}>{el.name}</option>)}
                    </select>

                    <ul>
                        {props.item.filter(el => el.value === props.value).map(u => u.hobbies.map((h, index) => <li key={index}>{h}</li> ))}
                    </ul>

                </div>
            }

        </div>
    )
}