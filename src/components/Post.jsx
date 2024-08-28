import styles from './Post.module.css';

import { format, formatDistanceToNow } from 'date-fns';
import ptBR from "date-fns/locale/pt-BR";

import { Avatar } from './Avatar';
import { Comment } from './Comment';
export function Post({ author, publishedAt }) {

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, 
    {
      locale: ptBR,
      addSuffix: true,
    });

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl}/>

          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu porfolio. 🚀</p>
        <p>👉 <a href="https://github.com/oliniski">https://github.com/oliniski</a></p>
        <p><a href="#"> #novoprojeto </a></p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea 
          placeholder="Deixe um comentário..."
        />

        <footer>
          <button type="submit">publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>

    </article>
  )
}