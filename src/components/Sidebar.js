import React from "react";
import "./Sidebar.css";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
// import {Avatar, IconButton} from "@material-ui/core";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { SearchOutlined } from "@mui/icons-material";
import SidebarChat from "./SidebarChat";
// import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src="https://www.pinkvilla.com/imageresize/janhvi-kapoor-main_3_0.jpg?width=752&t=pvorg" />
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
	  <div className="sidebar__search">
		<div className="sidebar__searchContainer">
			<SearchOutlined />
			<input placeholder="Search or start nee chat" type="text"/>
		</div>
	  </div>
	  
	  <div className="sidebar__chats">
      {/* <Link to='/chatuu'><SidebarChat name="yanki"/></Link> */}
		<SidebarChat last="okay" name="Arjun"/>
		<SidebarChat last="hi.." name='Guri'/>
		<SidebarChat last="yes it was oky" name="yanki"/>
	  </div>
    </div>
  );
}

export default Sidebar;
