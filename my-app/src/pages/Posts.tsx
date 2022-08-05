import React from 'react';
import {useSelector,useDispatch} from "react-redux";
import {getPosts} from "../store/features/post/postSlice";
import {useEffect} from "react";
const Posts = () => {

    // @ts-ignore
    const posts = useSelector(state => state.posts.posts)
    const dispatch = useDispatch()
    useEffect(()=>{
    dispatch(getPosts())
    },[dispatch])
    console.log(posts)

    return (
        <div>
            <h1>All posts</h1>
            <ul>
                {posts.map((post: any, index: React.Key | null | undefined)=>{
                    return (
                        <li key={index}>
                            post
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default Posts;
