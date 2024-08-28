
import styles from './Comment.module.css';

import { Avatar } from './Avatar';
import { Trash, ThumbsUp } from '@phosphor-icons/react';

export function Comment({content}) {
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

            <button title="Excluir comentário">
              <Trash size={24} />
            </button>
          </header>
            <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>

    </div>
  )
}