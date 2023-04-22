import React from 'react'
import './SidebarChat.css'
import Avatar from "@mui/material/Avatar";

function SidebarChat(props) {
  return (
	<div className='sidebarChat'>
	  <Avatar/>
	  <div className='sidebarChat__info'>
		<h2>{props.name}</h2>
		<p>{props.last}</p>
	  </div>
	</div>
  )
}

export default SidebarChat
