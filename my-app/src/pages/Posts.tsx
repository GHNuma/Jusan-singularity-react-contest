import React from 'react';
import {useTypedDispatch} from "../hooks/useTypedDispatch";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {getPosts} from "../store/features/post/postSlice";
import {useEffect} from "react";
import {Post} from "../store/features/post/postSlice";
import styled from "styled-components";

const Posts:React.FC = () => {

const StyledList = styled('li')`
  list-style-type: none;
  border: groove lightblue;
`
    const Hint = styled('span')`
    text-decoration: none;
      color: grey;
    `

    const posts = useTypedSelector(state => state.posts.posts)
    const dispatch = useTypedDispatch()
    useEffect(()=>{
    dispatch(getPosts())
    },[dispatch])
    console.log(posts)

    return (
        <div>
            <h1>All posts</h1>
            <ul>
                {posts.map((post:Post)=>{
                    return (
                        <StyledList key={post.id}>
                            <h1><Hint>Title:</Hint>{post.title}</h1>
                            <p><Hint>Content:</Hint>{post.body}</p>
                        </StyledList>
                    )
                })}
            </ul>
        </div>
    );
};

export default Posts;
