import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UncontrolledRating} from "./components/UncontrolledRaiting/UncontrolledRating";
import Accordion from "./components/Accordion/Accordion";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledInput} from "./components/UncontrolledInput/UncontrolledInput";
import {Input} from "./components/Input/Input";
import {Checkbox} from "./components/Checkbox/Checkbox";
import {Selected} from "./components/Selected/Selected";



function App() {

    const [ratingValue, setRatingValue] = useState<RatingValueType>(4)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [switchOn, setSwitchOn] = useState<boolean>(true)
    const [inputValue, setInputValue] = useState('write something')
    const [chekboxValue, setCheckboxValue] = useState(false)
    const [selectedValue, setSelectedValue] = useState<string | undefined>('2')

    return (
        <div className='App'>
            <UncontrolledAccordion titleValue={'Users'} />
            <Accordion titleValue={'Menu'} collapsed={accordionCollapsed} onChange={() => setAccordionCollapsed(!accordionCollapsed)}/>
            <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}
            <OnOff on={switchOn} onChange={() => setSwitchOn(!switchOn)}/>
            <UncontrolledRating />
            <Rating value={ratingValue} onClick={setRatingValue}/>


            <UncontrolledInput/>

            <Input value={inputValue} callBack={setInputValue}/>

            <Checkbox value={chekboxValue} callBack={setCheckboxValue}/>

            <Selected value={selectedValue} callBack={setSelectedValue}/>
        </div>
    );
}


type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return (
        <h1>
            {props.title}
        </h1>
    );
}



export default App;




