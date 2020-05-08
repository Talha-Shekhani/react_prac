import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { createForms } from 'react-redux-form'
import { Dishes } from './dishes'
import { Comments } from './comments'
import { Leaders } from './leaders'
import { Promotions } from './promotions'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { InitialFeedback } from './forms'

export const configureStore = () => {
    const store = createStore(combineReducers({
        dishes: Dishes,
        comments: Comments,
        leaders: Leaders,
        promotions: Promotions,
        ...createForms({
            feedback: InitialFeedback
        })
    }),
    compose(
        applyMiddleware(thunk, logger),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    )
    return store
}