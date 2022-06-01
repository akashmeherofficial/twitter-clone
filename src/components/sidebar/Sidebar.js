import React from "react";
import "./Sidebar.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import SidebarOptions from "../sidebaroption/SidebarOptions";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import TagIcon from "@mui/icons-material/Tag";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import ListAltIcon from "@mui/icons-material/ListAlt";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PermIdentityRoundedIcon from "@mui/icons-material/PermIdentityRounded";
import { Button } from "@mui/material/";
const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Twitter icon */}
      <TwitterIcon className="sidebar-twittericon" />

      {/* SidebarOption  */}
      <SidebarOptions Icon={HomeIcon} text="Home" />

      <SidebarOptions Icon={TagIcon} text="Explore" />

      <SidebarOptions Icon={NotificationsNoneIcon} text="Notifications" />
      <SidebarOptions Icon={MailOutlineIcon} text="Messages" />
      <SidebarOptions Icon={BookmarkBorderOutlinedIcon} text="Bookmarks" />

      <SidebarOptions Icon={ListAltIcon} text="Lists" />

      <SidebarOptions Icon={PermIdentityRoundedIcon} text="Profile" />

      <SidebarOptions Icon={MoreHorizIcon} text="More" />

      {/* ButtonTweet  */}
      <Button variant="outlined" className="sidebar-tweet" fullWidth>
        Tweet
      </Button>
    </div>
  );
};

export default Sidebar;
