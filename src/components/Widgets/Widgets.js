<<<<<<< HEAD
import React from "react";
import "./Widgets.css";
import { SearchOffOutlined } from "@mui/icons-material";
import { TextField } from "@mui/material";
import { IconButton } from "@mui/material";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";

const Widgets = () => {
  return (
    <div className="widgets">
      <div className="widgets-input">
        <SearchOffOutlined className="widgets-searchicon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widget-widgetcontainer">
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId={"1531944614416228352"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="akashmeher"
          options={{ height: 400 }}
        />
        <a
          href="https://twitter.com/K_K_Pal?ref_src=twsrc%5Etfw"
          class="twitter-follow-button"
          data-show-count="false"
        >
          Follow @K_K_Pal
        </a>
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charset="utf-8"
        ></script>
        <TwitterTweetEmbed tweetId={"1177311881469448193"} />
        <h2>Tap to Share</h2>
        <TwitterShareButton
          url={"https://www.facebook.com/akashmehermusic"}
          options={{ text: "A tribute on making", via: "akashmeher" }}
        />
      </div>

      {/* <input type="text" placeholder="Search Twitter" className="searchBox" /> */}
    </div>
  );
};

export default Widgets;
=======
import React from "react";
import "./Widgets.css";
import { SearchOffOutlined } from "@mui/icons-material";
import { TextField } from "@mui/material";
import { IconButton } from "@mui/material";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";

const Widgets = () => {
  return (
    <div className="widgets">
      <div className="widgets-input">
        <SearchOffOutlined className="widgets-searchicon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widget-widgetcontainer">
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId={"1531944614416228352"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="akashmeher"
          options={{ height: 400 }}
        />
        <a
          href="https://twitter.com/K_K_Pal?ref_src=twsrc%5Etfw"
          class="twitter-follow-button"
          data-show-count="false"
        >
          Follow @K_K_Pal
        </a>
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charset="utf-8"
        ></script>
        <TwitterTweetEmbed tweetId={"1177311881469448193"} />
        <h2>Tap to Share</h2>
        <TwitterShareButton
          url={"https://www.facebook.com/akashmehermusic"}
          options={{ text: "A tribute on making", via: "akashmeher" }}
        />
      </div>

      {/* <input type="text" placeholder="Search Twitter" className="searchBox" /> */}
    </div>
  );
};

export default Widgets;
>>>>>>> 0b5ae1b8b412baea96c19d0781b941b0290ad27f
