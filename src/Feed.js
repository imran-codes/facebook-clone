import React from 'react';
import './Feed.css';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post profilePic = "https://www.seo-genius.co.uk/wp-content/uploads/2019/03/PNGTransparent-Logo-1.png" image ="https://images.unsplash.com/photo-1593642634402-b0eb5e2eebc9?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" username = "imran" timestamp = "timestamp" message ="hello" />
      <Post profilePic = "https://www.seo-genius.co.uk/wp-content/uploads/2019/03/PNGTransparent-Logo-1.png" image ="https://images.unsplash.com/photo-1624525702008-ad9cb2802f64?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" username = "imran" timestamp = "timestamp" message ="hello" />
    </div>
  )
}

export default Feed
