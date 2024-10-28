import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import myIm from "./assets/usmanimg2.jpeg";
import imgNew from "./assets/imgefour.jpg";
import { SlOptionsVertical } from "react-icons/sl";
import { AiOutlineLike } from "react-icons/ai";
import { VscCommentDiscussion } from "react-icons/vsc";
import { VscLiveShare } from "react-icons/vsc";
import "./style.css";
// import imgNew5 from "./assets/imgefourjpg";
import imgNew4 from "./assets/imgeone.jpeg";
import imgNew3 from "./assets/imgefive.jpg";
import imgNew2 from "./assets/imgeseven.jpg";
import imgNew1 from "./assets/imgetwo.jpeg";
import { BsEmojiHeartEyes } from "react-icons/bs";
import { BsEmojiAstonished } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { FcLike } from "react-icons/fc";





function Post(Props) {
  return (
    <div className="post-container">
      <div className="post-header">
        <div className="post-user-detail">
        <img
            src={Props.dpimg}
            alt="Image"
            className="dp"
            id="my-id"
            title="Click here to visit profile"
          />
       
          <div id="userdiv">
            <h3> {Props.name}</h3>
            <span>1 hours ago</span>
          </div>
        </div>
       
        <SlOptionsVertical />
      </div>

      <p>
      Cristiano Ronaldo told he’ll never hit 1000 goals: 'His time in football is over'.
      Cristiano Ronaldo told he’ll never hit 1000 goals: 'His time in football is over'.
      </p>
      
     {
     
     Props.postImg  ? <img 
     src={Props.postImg}
       alt="post image" 
       className="post-photo"
        id="my-id" /> : null
        
        }
        <br/><br/>
        <div id="emoji">
       <div id="emoji1"><BsEmojiHeartEyes /></div>
       <div id="emoji2"><BsEmojiAstonished /></div>
       <div id="emoji3"><FcLike /></div> 
        </div>

      <div className="like-icon">
      <AiOutlineLike size={25} id='btntwo' title="Click to like" />
      <VscCommentDiscussion size={25} id='btnthree'title="Click to Comment"/>
      <VscLiveShare size={25} id='btnfour'title=" Click Share"/>
      <div id="lcs">
        <div>Like</div>
        <div>Comments</div>
        <div>Share</div> 
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div style={{ display: "flex", gap: "45px", flexDirection: "column" }}>
      <Post 
      name = "Usman"
      dpimg = "https://images.statusfacebook.com/profile_pictures/kids-dp/kids-dp-123.jpg"
      postImg = {imgNew4}
      // pera = ""
      />
      <Post 
      name = "Ayan Usman"
      dpimg = "https://e0.pxfuel.com/wallpapers/747/277/desktop-wallpaper-cute-baby-girl-kids-cute-baby-boy-cute-baby-girl-baby-girl-little-kids.jpg"
      
      />
      <Post
       name = "Ayub"
       dpimg = "https://1.bp.blogspot.com/-6Q900kubqIw/YQQCLhrpiXI/AAAAAAAA_pc/KIWq8-4ZDfAr4TZn_7hTVfYmSoQm97eCwCLcBGAsYHQ/s1024/393866.jpg"
       postImg = {imgNew3}
       />
      <Post
       name = "Rashid"
       dpimg = "https://funkylife.in/wp-content/uploads/2022/09/girl-dp-image-257-1024x994.jpg"
       />
      <Post
       name = "Ihsan"
       dpimg = "https://www.unigreet.com/wp-content/uploads/2022/10/baby-images-for-whatsapp-dp.jpg"
       postImg = {imgNew} 
       />
      <Post
       name = "Gaffar"
       dpimg = "https://i.pinimg.com/originals/63/73/a6/6373a672bbdf26fd9502012973ff3d85.jpg"
       
       postImg = {imgNew2}/>
      <Post 
      name = "Ashfaq"
      dpimg = "https://images.statusfacebook.com/dp/father-and-daughter-whatsapp-dp/father-and-daughter-dp-05.jpg"
      />
      <Post 
      name = "Nadeem"
      dpimg = "https://wallpapercave.com/wp/wp7727667.jpg"
      postImg = {imgNew1}
      />
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
