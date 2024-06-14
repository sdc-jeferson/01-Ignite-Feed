import { ThumbsUp, Trash } from "@phosphor-icons/react";
import { Avatar } from "../Avatar";
import styles from "./Comment.module.css";
import { useState } from "react";

interface CommentProps {
  content: string;
  deleteComment: (comment: string) => void;
}

export const Comment = ({ content, deleteComment }: CommentProps) => {
  const [like, setLike] = useState(0);

  function handleDeleteComments() {
    deleteComment(content);
  }

  return (
    <div className={styles.comment}>
      <Avatar
        src="https://github.com/diego3g.png"
        hasBorder={false}
        alt="Imagem da pessoa"
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Diego Fernandes</strong>
              <time dateTime="2023-21-05" title="21 de maio ás 14:54">
                Cerca de 2h atrás
              </time>
            </div>
            <button title="Deletar comentário" onClick={handleDeleteComments}>
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={() => setLike(like + 1)}>
            <ThumbsUp />
            Aplaudir <span>{like}</span>
          </button>
        </footer>
      </div>
    </div>
  );
};
