import { useState } from 'react';

import styles from './Comment.module.css';

import { Avatar } from './Avatar';
import { Trash, ThumbsUp } from '@phosphor-icons/react';

export function Comment({content, onDeleteComment}) {
  const [likeCount, setLikeCount] = useState(0);

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1;
    })
  }

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src='https://github.com/oliniski.png' />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Bruno Oliniski (você)</strong>
              <time>Cerca de 1h atrás</time>
            </div>

            <button onClick={handleDeleteComment} title="Excluir comentário">
              <Trash size={24} />
            </button>
          </header>
            <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>

    </div>
  )
}