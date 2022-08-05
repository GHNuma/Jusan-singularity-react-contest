import {createSlice} from "@reduxjs/toolkit";

export interface Post {
    id: number,
    title: string,
    body: string,
    userId: number
}

export type PostProps = {
    posts: Post[],
    isLoading: boolean
}

export const postSlice = createSlice({
    name: "posts",
    initialState: {
        posts: [],
        isLoading: false
    },
    reducers: {
        getPosts: (state) => {
            state.isLoading = true;
        },
        getPostsSuccess: (state, action) => {
            state.posts;
            state.isLoading = false;
        },
        getPostFailed: (state, action) => {
            state.isLoading = false;
        }
    }
});


export const {
    getPosts,
    getPostsSuccess,
    getPostFailed
} = postSlice.actions;

export default postSlice.reducer