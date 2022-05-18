import React, {useMemo, useState} from "react";

type PropsType = {
    country: string
    city: string
    population: number
}

type MainPropsType = {
    state: Array<PropsType>

}

export const ExampleWithSelectMemo = (props: MainPropsType) => {
    console.log('рисую селекты')


    return (
        <select>
            {props.state.map((el, index) => <option key={index}>{el.city}</option>)}
        </select>

    )
}

export const ExampleWithSelect = React.memo(ExampleWithSelectMemo)

export const Helps = () => {
    console.log('рисую всю компоненту')
    const [state, setState] = useState([
        {
            country: 'Belarus',
            city: 'Minsk',
            population: 5000000
        },
        {
            country: 'Ukraine',
            city: 'Kiev',
            population: 6000000
        },
        {
            country: 'Belarus',
            city: 'Rechitsa',
            population: 75000
        },
        {
            country: 'USA',
            city: 'Miami',
            population: 10000000
        },
        {
            country: 'Ukraine',
            city: 'Nikolaevka',
            population: 20000
        },
        {
            country: 'Belarus',
            city: 'Gomel',
            population: 350000
        },
        {
            country: 'USA',
            city: 'NY',
            population: 20000000
        },
    ])
    const [counter, setCounter] = useState(0)

    const firstList = useMemo(()=> {
        return state.filter(el => el.country === 'Belarus')
    },[state])
    const secondList = useMemo(()=> {
        return state.filter(el => el.population > 1000000)
    }, [state])
    const tirdList = useMemo(()=> {
        return state.filter(el => el.city.toLowerCase().indexOf('e') > -1)
    },[state])

    return (
        <div>
            <ExampleWithSelect state={firstList}/>
            <ExampleWithSelect state={secondList}/>
            <ExampleWithSelect state={tirdList}/>
            <div>
                <button onClick={() => setCounter(counter + 1)}>+</button>
                {counter}
            </div>
        </div>
    )
}