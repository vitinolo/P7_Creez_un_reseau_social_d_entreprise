import "../styles/style.css";
import Feed from "./Feed";
import axios from "axios";
import React, { useState, useEffect } from 'react';

//afficher les publications et commentaires
const Feeds = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    axios
    .get('http://localhost:3001/api/posts',{
      headers:{
        'Authorization': 'Bearer '+ localStorage.getItem("token")
      }
    })
    .then((res) => setData(res.data));   
  },[]);
  
  console.log({data})
 
  return ( 
    <div className="feed_publication" >
        <div className="posts">{data.map((post, index) => (
            <Feed key={index} post={post} />))}
        </div>
    </div>
  )
}
export default Feeds;



















/*
  const getFeed = () => {
    return axios
    .get('http://localhost:3001/api/posts')
    .then(posts =>
    {
      console.log(posts)
      const post = posts.map((post, _id)=>
        <div key={_id}>
          {post.body}
        </div>
      );
      Feed(post);
    })
    .catch((err) => console.log(err)) 
  }
  getFeed();

function Feed (post) {
  return (
    <div className="feed_publication">
        <Profile />
        <div className="img_publication">
          Ceci est une image
        </div>
        <div className="texte_publication">
          $({post.body})
        </div>
        <div className="modifyAndRemovePost">
          <span className="icone-remove icone"><FontAwesomeIcon icon={faTrash} /></span>
          <span className="icone-comment icone"><FontAwesomeIcon icon={faComment} /></span>
          <span className="icone-modify icone"><FontAwesomeIcon icon={faPen} /></span>
        </div>
        <div className="vote_publication">
          <span className="icone-like icone"><FontAwesomeIcon icon={faThumbsUp} /></span>
          <span className="icone-dislike icone"><FontAwesomeIcon icon={faThumbsDown} /></span>
        </div>
        <Comments />
    </div>
  );
}

  


export default Feed;*/