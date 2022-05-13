import React from "react";

export type ItemsType = {
    name: string
    value: string
}

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    items: ItemsType[]
    onItemClick: (value: string) => void
}

export function AccordionMemo(props: AccordionPropsType) {

    return (
        <div>
            <AccordionTitle title={props.titleValue} onChange={props.onChange} collapsed={props.collapsed}/>
            {!props.collapsed && <AccordionBody items={props.items} onItemClick={props.onItemClick}/>}
        </div>
    );
}

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
    collapsed: boolean
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={props.onChange}>---{props.title}---</h3>
    );
}

export type AccordionBodyPropsType = {
    items: ItemsType[]
    onItemClick: (value: string) => void
}

function AccordionBody(props:AccordionBodyPropsType) {
    return (
        <ul>
            {props.items.map((el, index) => <li onClick={() => props.onItemClick(el.value)} key={index}>{el.name}</li>)}
        </ul>
    );
}

export const Accordion = React.memo(AccordionMemo)