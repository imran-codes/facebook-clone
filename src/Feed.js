import React, {useEffect, useState} from 'react';
import './Feed.css';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';
import db from './firebase'

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").orderBy('timestamp', 'desc' ).onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((doc) => {
          return {id: doc.id, data: doc.data() }
        }))
    })

}, [])

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />

      { posts.map((post) => (
            <Post 
            key = {post.id}
            profilePic = {post.data.profilePic} 
            image = {post.data.image} 
            postname = {post.data.postname} 
            timestamp = {post.data.timestamp} 
            message = {post.data.message}
            username = {post.data.username} />
            ))}
      
    </div>
  )
}

export default Feed
