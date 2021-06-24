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
      <Post profilePic = "https://www.seo-genius.co.uk/wp-content/uploads/2019/03/PNGTransparent-Logo-1.png" image ="https://www.seo-genius.co.uk/wp-content/uploads/2019/03/PNGTransparent-Logo-1.png" username = "imran" timestamp = "timestamp" message ="hello" />
    </div>
  )
}

export default Feed
