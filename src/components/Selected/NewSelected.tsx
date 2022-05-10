import React, {useState, KeyboardEvent, useEffect} from "react";
import style from './NewSelected.module.css'

type ItemsForNewSelectedType = {
    value: string
    title: string
}

type SelectedPropsType = {
    value: string | undefined
    callBack: (newValue: string) => void
    itemsForNewSelected: Array<ItemsForNewSelectedType>
}

export const NewSelected = (props: SelectedPropsType) => {

    const [selectedItems, setSelectedItems] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

    const selectedElement = props.itemsForNewSelected.find(el => el.value === props.value)
    const hoveredElement = props.itemsForNewSelected.find(el => el.value === hoveredElementValue)

    useEffect( () => {
        setHoveredElementValue(props.value);
    }, [props.value])

    const onSpanClickHandler = () => {
        setSelectedItems(!selectedItems)
    }

    const onItemClickHandler = (newValue: string) => {
        props.callBack(newValue)
        setSelectedItems(!selectedItems)
    }

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.itemsForNewSelected.length; i++) {
                if (props.itemsForNewSelected[i].value === hoveredElementValue) {
                    const pretendentElement = e.key === 'ArrowDown' ? props.itemsForNewSelected[i + 1] : props.itemsForNewSelected[i - 1]
                    if (pretendentElement) {
                        props.callBack(pretendentElement.value)
                        return;
                    }
                }
            }
            if (!selectedElement) {
            props.callBack(props.itemsForNewSelected[0].value);
            }
        }

        if(e.key === 'Enter' || e.key === 'Escape') {
            setSelectedItems(false)
        }
    }

    return (
        <div className={style.select}  tabIndex={0} onKeyUp={onKeyUp}>

            <span className={style.main}
                  onClick={onSpanClickHandler}
            > {selectedElement && selectedElement.title} </span>

            {
                selectedItems &&
                <div className={style.items}>
                    {props.itemsForNewSelected.map(el => <div
                        onMouseEnter={() => setHoveredElementValue(el.value)}
                        onClick={() => onItemClickHandler(el.value)}
                        key={el.value}
                        className={style.item + ' ' + (hoveredElement === el ? style.selected : '')}
                    >{el.title}
                    </div>)}
                </div>
            }

        </div>
    )
}