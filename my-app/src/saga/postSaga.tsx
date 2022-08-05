import {call, put, takeEvery, takeLatest} from 'redux-saga/effects'
import axios,{AxiosInstance,AxiosRequestConfig} from "axios"
import {getPosts, getPostsFailed, getPostsSuccess, Post} from "../store/features/post/postSlice";
import Posts from "../pages/Posts";

const config:AxiosRequestConfig = {
    baseURL: 'https://jsonplaceholder.typicode.com/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
}

const instance:AxiosInstance = axios.create(config);


const fetchPosts = () =>{
    getPosts()
    return instance.get("posts",config)
}

function* workGetPostsFetch() {
    try {
        // @ts-ignore
        const response = yield call(fetchPosts);
        yield put(getPostsSuccess(response.data))
    } catch (e){
        yield put(getPostsFailed())
    }
}


function* PostSaga() {
    yield takeEvery('posts/getPosts', workGetPostsFetch)
}

export default PostSaga


