import React, {useEffect, useState} from 'react';

export const SetTimeOutWithUseEffect = () => {
    const [text, setText] = useState('fdsfsdfs')
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            console.log(text)
        }, 5000)

        return () => {
            clearTimeout(timeoutId)
        }
    }, [text])

    return (
        <>

        </>
    )
};

