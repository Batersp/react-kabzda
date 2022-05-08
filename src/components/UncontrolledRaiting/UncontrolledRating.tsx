import React, {useState} from "react";
import {Star} from "./Star/Star";


/*type RatingPropsType = {
    value: 0 | 1 | 3 | 4 | 5 | 6 | 2
}*/

export function UncontrolledRating() {

    let [value, setValue] = useState<number>(3)



    return (
        <div>
            <Star selected={value > 0} setValue={() => setValue(1)}/>
            <Star selected={value > 1} setValue={() => setValue(2)}/>
            <Star selected={value > 2} setValue={() => setValue(3)}/>
            <Star selected={value > 3} setValue={() => setValue(4)}/>
        </div>
    );


}




