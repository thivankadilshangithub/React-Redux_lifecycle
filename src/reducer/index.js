import {combineReducers} from 'redux'
import AllPostReducer from './reducer.GetAllPost'

const rootReducer = combineReducers({
    allPosts : AllPostReducer,
})

export default rootReducer