import { combineReducers } from 'redux'
import mainReducer from './reducer'

export default combineReducers({
    app: mainReducer
})