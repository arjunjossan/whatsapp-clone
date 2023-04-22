import React from 'react'
import './Chat.css'
import Avatar from "@mui/material/Avatar";
import MoreVertIcon from "@mui/icons-material/MoreVert";
// import ChatIcon from "@mui/icons-material/Chat";
import SearchOutlined from "@mui/icons-material/SearchOutlined";
import IconButton from "@mui/material/IconButton";
import MicIcon from "@mui/icons-material/Mic";
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import  AttachFile  from '@mui/icons-material/AttachFile';

function Chat1() {
  return (
	<div className='chat'>
	  <div className='chat__header'>
		<Avatar />

		<div className='chat__headerInfo'>
			<h3>Arjun</h3>
			<p>2 minutes ago </p>
		</div>
		<div className='chat__headerRight'>
		<IconButton>
		<SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile/>
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
		</div>
	  </div>
	  <div className='chat__body'>

		<p className='chat__message'>
			<span className='chat__name'>Arjun</span>
			hi
			<span className='chat__timestamp'>
				{new Date().toUTCString()}
			</span>
			</p>
			
			<p className='chat__message chat__reciever'>
			<span className='chat__name'>Mani</span>
			How! are u boond gya oye arjun..
			<span className='chat__timestamp'>
				{new Date().toUTCString()}
			</span>
			</p>

			<p className='chat__message'>
			<span className='chat__name'>Arjun</span>
			fine what about u
			<span className='chat__timestamp'>
				{new Date().toUTCString()}
			</span>
			</p> 

			<p className='chat__message chat__reciever'>
			<span className='chat__name'>Mani</span>
			great
			<span className='chat__timestamp'>
				{new Date().toUTCString()}
			</span>
			</p>

			<p className='chat__message'>
			<span className='chat__name chat__reciever'>Arjun</span>
			okay !!!
			<span className='chat__timestamp'>
				{new Date().toUTCString()}
			</span>
			</p>
	  </div>
	  <div className='chat__footer'>
		<InsertEmoticonIcon/>
		<form>
			<input 
			placeholder='Type a message'
			type='text'
			/>
			<button
			type='submit'>send message
			</button>
		</form>
		<MicIcon/>
	  </div>
	</div>
  )
}

export default Chat1
