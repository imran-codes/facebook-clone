import React from 'react';
import './Widgets.css'

function Widgets() {
  return (
    <div className = "widgets">
      <iframe 
      src = "https://seo-genius.co.uk/website-design/"
      width = "340"
      height = "100%"
      style = {{ border: "none", overflow: "hidden"}}
      scrolling = "yes"
      frameBorder = "0"
      allowTransparency = "true"
      allow = "encrypted-media"
      title = "SEO Genius"></iframe>
    </div>
  )
}

export default Widgets
