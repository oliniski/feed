import styles from './Post.module.css';
import { Comment } from './Comment';
import { Avatar } from './Avatar';
export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/oliniski.png"/>

          <div className={styles.authorInfo}>
            <strong>Bruno Oliniski</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time
          title="27/08/2024 17:42"
          dateTime="27/08/2024 17:42">
          Publicado há 1h
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