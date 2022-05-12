export type CollapsedReducerType = tooggleCollapsedACType
export type tooggleCollapsedACType = ReturnType<typeof tooggleCollapsedAC>
export type StateType = {
    collapsed: boolean
}


export const tooggleCollapsedAC = () => {
    return {
        type: 'TOGGLE-COLLAPSED'
    } as const
}


export const collapsedReducer = (state: StateType, action: CollapsedReducerType): StateType => {
    switch (action.type) {
        case "TOGGLE-COLLAPSED": {
            return {...state, collapsed: !state.collapsed}
        }
        default:
            return state
    }
}