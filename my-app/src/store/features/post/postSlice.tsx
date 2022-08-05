import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type Post = {
    id: number,
    title: string,
    body: string,
    userId: number
}

type PostState = {
    posts:Post[];
    isLoading:boolean
}

const initialState:PostState = {
    posts:[],
    isLoading:false
}

export const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        getPosts: (state) => {
            state.isLoading = true;
        },
        getPostsSuccess: (state, action:PayloadAction<any>) => {
            state.posts=action.payload;
            state.isLoading = false;
        },
        getPostsFailed: (state) => {
            state.isLoading = false;
        }
    }
});


export const {
    getPosts,
    getPostsSuccess,
    getPostsFailed
} = postSlice.actions;

export default postSlice.reducer