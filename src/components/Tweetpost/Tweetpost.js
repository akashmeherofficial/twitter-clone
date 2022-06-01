import React from "react";
import "./Tweetpost.css";
import { Avatar, Button } from "@mui/material/";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import GifBoxOutlinedIcon from "@mui/icons-material/GifBoxOutlined";
import PollOutlinedIcon from "@mui/icons-material/PollOutlined";
import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";

const Tweetpost = () => {
  return (
    <div className="tweetpost">
      <form>
        <div className="tweetpost-input">
          <Avatar src="https://scontent.fbbi5-1.fna.fbcdn.net/v/t39.30808-1/280668682_3246195175664924_7233632111740822580_n.jpg?stp=c0.20.320.320a_dst-jpg_p320x320&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=FtQ26FLyFsMAX99U4cC&_nc_ht=scontent.fbbi5-1.fna&oh=00_AT9Dv4DrVKIPC7IhSymB30EujsyfQ7oOo8JTaB2OQspULw&oe=629CB025" />
          <input
            placeholder="What's happening?"
            type="text"
            className="tweetpost-inputbox"
          />
        </div>

        <div className="itemtopost">
          <ImageOutlinedIcon />
          <GifBoxOutlinedIcon />
          <PollOutlinedIcon />
          <SentimentSatisfiedOutlinedIcon />
          <DateRangeOutlinedIcon />
          <FmdGoodOutlinedIcon />
          <Button className="tweetpost-button">Tweet</Button>
        </div>
      </form>
    </div>
  );
};

export default Tweetpost;
