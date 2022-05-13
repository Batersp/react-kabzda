import React, {useState} from "react";

export type TablePropsType = {
    number: number
}


export const HouseMemo = () => {
    console.log('отрисовываю house а он не менялся' )
    const [houses, setHouses] = useState(['Dom sobaki', 'Dom kota', 'Dom svinbi', 'Dom golubya'])

    return (
        <div>
            {houses.map((el, index) =>  <div key={index}>{el}</div>)}
        </div>
    )
}

const House = React.memo(HouseMemo)

export const TablesNumberMemo = (props: TablePropsType) => {
    console.log('alalal')
    return (
        <div>
            {props.number}

        </div>
    )
}

export const TablesNumber = React.memo(TablesNumberMemo)


export const MyCapitalMemo = () => {
    const [number, setNumber] = useState(1)

    const onClickHandler = () => {
        setNumber(number+1)
    }
    return (
        <div>
            <House/>
            <TablesNumber number={number} />
            <button onClick={onClickHandler}>add one table</button>
        </div>
    )
}

export const MyCapital = React.memo(MyCapitalMemo)