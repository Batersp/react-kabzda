import React, {useMemo, useState} from "react";



export const UsersMemo = (props: { users: string[] }) => {
    console.log('Users')
    return (
        <div>
            {props.users.map((el, index) => <div key={index}>{el}</div>)}
        </div>
    )
}

const Users = React.memo(UsersMemo)

export const HelpsToReactMemo = () => {
    console.log('HelpsToReactMemo')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Pasha', 'Bobi', 'Jack', 'Smit'])


    const newArray = useMemo(() => {
        return users.filter(el => el.toLowerCase().indexOf('a') > -1) /*{пропускает юзеров у которых в имени есть буква а}*/
    }, [users])

    const addUser = () => {
        const newUsers = [...users, 'Margo']
        setUsers(newUsers)
    }

    return (
        <div>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={addUser}>add User</button>
            {counter}
            <Users users={newArray}/>
        </div>
    )
}

