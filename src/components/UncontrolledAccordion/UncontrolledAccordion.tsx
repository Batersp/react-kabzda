import React, {useReducer} from "react";
import {AccordionTitle} from "./AccordionTitle";
import {collapsedReducer, tooggleCollapsedAC} from "./CollapsedReducer";

type AccordionPropsType = {
    titleValue: string
}

export function UncontrolledAccordionMemo(props: AccordionPropsType) {

    const [state, dispatch] = useReducer(collapsedReducer, {collapsed: false})

    const onClickHandler = () => {
        dispatch(tooggleCollapsedAC())
    }

    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={onClickHandler}/>
            {state.collapsed && <AccordionBody/>}
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

export const UncontrolledAccordion = React.memo(UncontrolledAccordionMemo)