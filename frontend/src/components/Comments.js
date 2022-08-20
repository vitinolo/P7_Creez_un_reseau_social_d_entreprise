import "../styles/style.css";
import Comment from"./Comment";
function Comments() {
  return (
    <div className="comments">
      <Comment />
      <div className="comments_publication">
        <span className="feed_title">Commentez:</span>
        <div className="publication_send">
          <button className="publication_button"target="_blank"title="Cliquez pour ajouter une image">
            Ajouter une image
          </button>
          <input
            target="_blank"
            title="Cliquez puis écrire votre message"
            placeholder="Composez et partagez"
            type="text"
            name="text"
            id="text_feed">
          </input>
        </div>
        <button
          className="publication_button_send"
          target="_blank"
          title="Cliquez pour afficher votre message">
          Afficher
        </button>
      </div>
    </div>
  );
}

export default Comments;
