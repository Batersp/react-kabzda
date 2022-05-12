import {collapsedReducer} from "./CollapsedReducer";

test('collapsed should be true ', () => {

    const state = {
        collapsed: false
    }

    const newState = collapsedReducer(state, {type: "TOGGLE-COLLAPSED"})


    expect(newState.collapsed).toBe(true)


})


test('collapsed should be false', () => {

    const state = {
        collapsed: true
    }

    const newState = collapsedReducer(state, {type: "TOGGLE-COLLAPSED"})


    expect(newState.collapsed).toBe(false)


})