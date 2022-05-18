import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UncontrolledRating} from "./components/UncontrolledRaiting/UncontrolledRating";
import {Accordion} from "./components/Accordion/Accordion";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledInput} from "./components/UncontrolledInput/UncontrolledInput";
import {Input} from "./components/Input/Input";
import {Checkbox} from "./components/Checkbox/Checkbox";
import {Selected} from "./components/Selected/Selected";
import {NewSelected} from "./components/Selected/NewSelected";
import {MyCapital} from "./components/ReactMemo/ReactMemo";
import {Example1} from "./components/ExampleWithUseMemo/Example1";
import {HelpsToReactMemo} from "./components/ExampleWithUseMemo/DifficultCountingExample";
import {Helps} from "./components/ExampleWithUseMemo/ExampleWithSelect";


function App() {

    const [ratingValue, setRatingValue] = useState<RatingValueType>(4)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [switchOn, setSwitchOn] = useState<boolean>(true)
    const [inputValue, setInputValue] = useState('write something')
    const [chekboxValue, setCheckboxValue] = useState(false)
    const [selectedValue, setSelectedValue] = useState<string | undefined>('2')
    const [newSelectedValue, setNewSelectedValue] = useState<string | undefined>('4')

    const itemsForAccordion = [
        {
            name: 'Pasha',
            value: '1'
        },
        {
            name: 'Bobi',
            value: '2'
        },
        {
            name: 'Nikolas',
            value: '3'
        },
        {
            name: 'Martey',
            value: '4'
        },
    ]

    const itemsForNewSelected = [
        {value: '1', title: 'Arsenal'},
        {value: '2', title: 'Barselona'},
        {value: '3', title: 'Madrid'},
        {value: '4', title: 'PSG'}
    ]


    const onItemClick = (value: string) => {
        console.log(`user with value ${value} was be clicked`)
    }

    return (
        <div className='App'>
            <UncontrolledAccordion titleValue={'Users'}/>

            <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}
            <OnOff on={switchOn} onChange={() => setSwitchOn(!switchOn)}/>
            <UncontrolledRating/>
            <Rating value={ratingValue} onClick={setRatingValue}/>


            <UncontrolledInput/>

            <Input value={inputValue} callBack={setInputValue}/>

            <Checkbox value={chekboxValue} callBack={setCheckboxValue}/>


            <Accordion
                titleValue={'Menu'}
                collapsed={accordionCollapsed}
                onChange={() => setAccordionCollapsed(!accordionCollapsed)}
                items={itemsForAccordion}
                onItemClick={onItemClick}
            />


            <Selected value={selectedValue} callBack={setSelectedValue}/>

            <NewSelected value={newSelectedValue} callBack={setNewSelectedValue}
                         itemsForNewSelected={itemsForNewSelected}/>

            <MyCapital/>

            <Example1/>

            <HelpsToReactMemo/>

            <hr/>
            <Helps/>

        </div>
    );
}


export default App;




