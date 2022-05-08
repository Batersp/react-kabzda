import React, {useState} from "react";
import {AccordionTitle} from "./AccordionTitle";

type AccordionPropsType = {
    titleValue: string
}


export function UncontrolledAccordion(props: AccordionPropsType) {

    const [collapsed, setCollapsed] = useState<boolean>(true)

    const onClickHandler = () => {
        setCollapsed(!collapsed)
    }

    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={onClickHandler}/>
            {!collapsed && <AccordionBody/>}
        </div>
    );
}


function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}

