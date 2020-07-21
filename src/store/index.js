import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { imagesReducer } from './reducers/imagesReducer'

const rootReducer = combineReducers({
    images: imagesReducer
})

export default createStore(rootReducer, applyMiddleware(thunk))