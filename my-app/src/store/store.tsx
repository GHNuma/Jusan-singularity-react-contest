import { configureStore,applyMiddleware } from '@reduxjs/toolkit'
import createSagaMiddleware from "redux-saga"
import postReducer from "./features/post/postSlice"
import PostSaga from "../saga/postSaga";


const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
    reducer: {
        posts:postReducer
    },
    middleware:[sagaMiddleware]
})

sagaMiddleware.run(PostSaga)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch