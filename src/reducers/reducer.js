import { 
    TEST_TYPE,
    INCREMENT
 } from '../actions/types'

const initialState = {
    test: 'test redux',
    count: 0
}

export default function reduce(state = initialState, action) {
    switch (action.type) {
        case TEST_TYPE:
            return {
                ...state
            }
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }
        default:
            return state;
    }
}