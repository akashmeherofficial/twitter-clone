<<<<<<< HEAD
import { Avatar } from "@mui/material";
import { display } from "@mui/system";
import { getDisplayName } from "@mui/utils";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import RepeatOutlinedIcon from "@mui/icons-material/RepeatOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import IosShareOutlinedIcon from "@mui/icons-material/IosShareOutlined";
import React from "react";
import "./Post.css";
import VerifiedIcon from "@mui/icons-material/Verified";

const Post = ({ displayName, username, verified, text, image, avatar }) => {
  return (
    <div className="post">
      <div className="post-avatar">
        <Avatar src={avatar} />
      </div>
      <div className="post-content">
        <div className="post-header">
          <div className="post headertext">
            <h3>
              {displayName}{" "}
              <span className="post-header-username">
                {verified && <VerifiedIcon className="post-bagde" />}@{username}
              </span>{" "}
            </h3>
          </div>
          <div className="post-header-description">
            <p>{text}</p>
          </div>
        </div>
        <img src={image} alt="" />
        <div className="post-footer">
          <ChatBubbleOutlineOutlinedIcon />
          <RepeatOutlinedIcon />
          <FavoriteBorderOutlinedIcon />
          <IosShareOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Post;
=======
import { Avatar } from "@mui/material";
import { display } from "@mui/system";
import { getDisplayName } from "@mui/utils";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import RepeatOutlinedIcon from "@mui/icons-material/RepeatOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import IosShareOutlinedIcon from "@mui/icons-material/IosShareOutlined";
import React from "react";
import "./Post.css";
import VerifiedIcon from "@mui/icons-material/Verified";

const Post = ({ displayName, username, verified, text, image, avatar }) => {
  return (
    <div className="post">
      <div className="post-avatar">
        <Avatar src={avatar} />
      </div>
      <div className="post-content">
        <div className="post-header">
          <div className="post headertext">
            <h3>
              {displayName}{" "}
              <span className="post-header-username">
                {verified && <VerifiedIcon className="post-bagde" />}@{username}
              </span>{" "}
            </h3>
          </div>
          <div className="post-header-description">
            <p>{text}</p>
          </div>
        </div>
        <img src={image} alt="" />
        <div className="post-footer">
          <ChatBubbleOutlineOutlinedIcon />
          <RepeatOutlinedIcon />
          <FavoriteBorderOutlinedIcon />
          <IosShareOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Post;
>>>>>>> 0b5ae1b8b412baea96c19d0781b941b0290ad27f
