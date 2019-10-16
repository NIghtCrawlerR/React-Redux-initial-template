import { TEST_TYPE } from '../actions/types'

const initialState = {
    test: true
}

export default function reduce(state = initialState, action) {
    switch (action.type) {
        case TEST_TYPE:
            return {
                ...state
            }
        default:
            return state;
    }
}