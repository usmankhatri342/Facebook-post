import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import myIm from "./assets/usmanimg2.jpeg";
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
            alt="Image"
            className="dp"
            id="my-id"
            title="Click here to visit profile"
          />
       
          <div id="userdiv">
            <h3 id="userName">Usman Ramzan</h3>
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
      <AiOutlineLike size={25} id='btntwo' title="Click to like" />
      <VscCommentDiscussion size={25} id='btnthree'title="Comment"/>
      <VscLiveShare size={25} id='btnfour'title="Share"/>

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
