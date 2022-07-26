import axios from "axios";
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const VotePublication = ({post}) =>{
    const id = post._id;
    const [likes, setLikes] = useState(0);

    useEffect(() => {
       setLikes(post.likes)
      },[post]);

    function liker () {   
            axios
                .post(`posts/${id}/like`,{})
                .then((res) => (
                setLikes(res.data.post.likes)  
                ))
    }
    return (
        <div className="vote_publication">
            <button onClick={() => liker()} title="Liker" alt="like" className="icone-like icone" ><FontAwesomeIcon icon={faThumbsUp} /></button>
            <div className="numberOfLikes" >{likes}</div>
        </div>                
    );
}

export default VotePublication;