import { applyMiddleware, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from 'reducers'
import rootSaga from 'sagas'


export default function configureStore () {
  const sagaMiddleware = createSagaMiddleware()

  const enhancers = [

  ]

  const middleware = [
      sagaMiddleware
  ]

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  const composedEnhancers = composeEnhancers(
      applyMiddleware(...middleware),
      ...enhancers
  )

  const store = createStore(
      rootReducer,
      composedEnhancers
  )

  sagaMiddleware.run(rootSaga)

  return store
}
