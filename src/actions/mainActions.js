import {
    TEST_TYPE,
    INCREMENT
} from './types'

export const testAction = () => dispatch => {
    dispatch({
        type: TEST_TYPE
    })
}

export const increment = () => dispatch => {
    dispatch({
        type: INCREMENT
    })
}