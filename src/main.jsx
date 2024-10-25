import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import myIm from "./assets/usmanimg.jpg";
import imgNew from "./assets/ronaldo.jpeg";
import { SlOptionsVertical } from "react-icons/sl";
import { AiOutlineLike } from "react-icons/ai";
import { VscCommentDiscussion } from "react-icons/vsc";
import { VscLiveShare } from "react-icons/vsc";
import "./style.css";

function Post() {
  return (
    <div className="post-container">
      <div className="post-header">
        <div className="post-user-detail">
        <img
            src={myIm}
            alt="Loading"
            className="dp"
            id="my-id"
            title="Click here to visit profile"
          />
       
          <div>
            <h3>Usman Ramzan</h3>
            <span>1 hours ago</span>
          </div>
        </div>
        <SlOptionsVertical />
      </div>

      <p>
      Cristiano Ronaldo told he’ll never hit 1000 goals: 'His time in football is over'
      </p>
      <img src={imgNew} alt="post image" className="post-photo" id="my-id" />

      <div className="like-icon">
      <AiOutlineLike size={30} id='likebtn' title="Click to like" />
      <VscCommentDiscussion size={30} id='commentbtn'title="Comment"/>
      <VscLiveShare size={30} id='sharebtn'title="Share"/>

      </div>
    </div>
  );
}

function App() {
  return (
    <div style={{ display: "flex", gap: "20px", flexDirection: "column" }}>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
