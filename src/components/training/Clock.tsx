import React, {useEffect, useState} from "react";


export const Clock = () => {
    const [a, setA] = useState(new Date())

    const myFn = (number: number) => number < 10 ? '0' + number : number

    useEffect(() => {
        const intervalId = setInterval(() => {
            setA(new Date)
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [])


    return (
        <div>
            {a.getHours()}:
            {myFn(a.getMinutes())}:
            {myFn(a.getSeconds())}

        </div>
    )
}