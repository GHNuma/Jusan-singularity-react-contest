import {call, put, takeEvery, takeLatest} from 'redux-saga/effects'
import axios from "axios"
import {getPostsSuccess, Post, PostProps} from "../store/features/post/postSlice";

function* workGetPostsFetch(): Generator<PostProps> {
    const instance = axios.create({
        baseURL: 'https://jsonplaceholder.typicode.com/posts',
        timeout: 1000,
        headers: {'X-Custom-Header': 'foobar'}
    });
    // @ts-ignore
    const posts = yield call(() => instance.get());
    // @ts-ignore
    const formattedData = yield posts.json()
    // @ts-ignore
    yield put(getPostsSuccess(formattedData))
}


function* PostSaga() {
    yield takeEvery('posts/getPosts', workGetPostsFetch)
}

export default PostSaga