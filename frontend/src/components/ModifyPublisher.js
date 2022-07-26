import React, { useState,useEffect } from 'react';
import axios from "axios";
import "../styles/style.css";

const ModifyPublisher = ({post, posts, setPosts}) => {
    const id = post._id;
    const [inputMessage, setInputMessage] = useState("")
    const [image, setImage] = useState ("")
    const [file, setFile] = useState ("") 
    
    useEffect(() => {
      setInputMessage(post.body)
    },[post]);

    function handleClick (e) {
        handleSubmit(e)
    }
  
    function handleSubmit (e) {
      e.preventDefault()
      function postData() {
          const userId = localStorage.getItem("userId"); 
          const form =new FormData(); 
          form.append("userId", userId);
          form.append("body", inputMessage);
          
          if(file){
            form.append("image", file, image);
          }

        axios
          .put(`posts/${id}`, form)
          .then(res => {
            const index = posts.findIndex(p => p._id === id)
            console.log(index)
            const postsCopy = [...posts]
            postsCopy[index].body = res.data.post.body;
            postsCopy[index].imageUrl = res.data.post.imageUrl;
            setPosts(postsCopy);
            alert(res.data.message);    
          })
          .catch((err) => alert(err ="mettre une image et/ou un texte !"))   
      }
          postData();
    } 
    
    function handleChangeMessage (e) {
      setInputMessage(e.target.value)
    }
  
    function handleChangeImage (e) {
      console.log(e.target.value)
      setImage(e.target.value)
      setFile(e.target.files[0])
    }
    return(
        <div className="modify_publication">
            <span className="modify_title">Modifier votre message:</span>
            <div className="feed_publication_send">
                <input type="file" accept=".jpg, .jpeg, .png" id="file" name="file" className="publication_file" title="Cliquez pour ajouter une image" value={image} onChange={handleChangeImage}></input>
                <input title="Cliquez puis écrire votre message" placeholder="Taper ici votre message" type="text" name="text" id="text_feed" value={inputMessage} onChange={handleChangeMessage}></input>
            </div>
            <button onClick={handleClick} className="publication_button_send" title="Cliquer pour afficher votre message">Modifier l'article</button>    
        </div>       
    ) 
}

export default ModifyPublisher;

