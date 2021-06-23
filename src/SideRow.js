import React from 'react'
import './Siderow.css'
import { Avatar } from '@material-ui/core'

function SideRow({ src, Icon, title }) {
  return (
    <div className="sideRow">
      {src && <Avatar src={src} />}
      {Icon && <Icon />}
      <h4>{title}</h4>
    </div>
  )
}

export default SideRow
