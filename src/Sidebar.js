import React from 'react'
import './Sidebar.css'
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SidebarOption from './SidebarOption'
import { Button } from "@material-ui/core";

function Sidebar() {
    return (
        <div className='sidebar'>
            <TwitterIcon className='twitter__icon'></TwitterIcon>
            <SidebarOption active text='Home' Icon={HomeIcon}></SidebarOption>
            <SidebarOption text='Explore' Icon={SearchIcon}></SidebarOption>
            <SidebarOption text='Notifications' Icon={NotificationsNoneIcon}></SidebarOption>
            <SidebarOption text='Messages' Icon={MailOutlineIcon}></SidebarOption>
            <SidebarOption text='Bookmarks' Icon={BookmarkBorderIcon}></SidebarOption>
            <SidebarOption text='Lists' Icon={ListAltIcon}></SidebarOption>
            <SidebarOption text='Profile' Icon={PermIdentityIcon}></SidebarOption>
            <SidebarOption text='More' Icon={MoreHorizIcon}></SidebarOption>
            <Button variant="outlined" className="sidebar__tweet" fullWidth>
            Tweet
            </Button>
        </div>
    )
}

export default Sidebar
