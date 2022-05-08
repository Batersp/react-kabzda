import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UncontrolledRating} from "./components/UncontrolledRaiting/UncontrolledRating";
import Accordion from "./components/Accordion/Accordion";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledInput} from "./components/UncontrolledInput/UncontrolledInput";
import {Input} from "./Input/Input";



function App() {

    const [ratingValue, setRatingValue] = useState<RatingValueType>(4)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [switchOn, setSwitchOn] = useState<boolean>(true)

    return (
        <div className='App'>
            <UncontrolledAccordion titleValue={'Users'} />
            <Accordion titleValue={'Menu'} collapsed={accordionCollapsed} onChange={() => setAccordionCollapsed(!accordionCollapsed)}/>
            <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}
            <OnOff on={switchOn} onChange={() => setSwitchOn(!switchOn)}/>
            <UncontrolledRating />
            <Rating value={ratingValue} onClick={setRatingValue}/>


            <UncontrolledInput/>

            <Input value={'lalalala'}/>
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




