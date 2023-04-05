import React from 'react'
import './mainpost.css';
import ContentPost from '../ContentPostContainer/contentpost';
import Post from '../PostContainer/Post';

export default function mainpost() {
  return (
    <div className='MainPostContainer'>
      < ContentPost />
      <Post />
      <Post />
    </div>
  )
}
