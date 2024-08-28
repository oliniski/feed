import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"

import styles from "./App.module.css"
import "./global.css"

const posts = [
  {
    id: 1,
    author: {
      name: "Bruno Oliniski",
      avatarUrl: "https://github.com/oliniski.png",
      role: "Web Developer"
    },
    content: [
      { type: 'paragraph', content: 'Fala galeria ✌️'},
      { type: 'paragraph', content: "Acabei de subir mais um projeto no meu porfolio. 🚀"},
      { type: 'link', content: "https://github.com/oliniski"},
    ],
    publishedAt: new Date('2024-08-28 13:00:00')
  },
  {
    id: 2,
    author: {
      name: "Bruno Bihuna",
      avatarUrl: "https://github.com/oliniski.png",
      role: "Fullstack Developer"
    },
    content: [
      { type: 'paragraph', content: 'Fala galera ✌️'},
      { type: 'paragraph', content: "Acabei de subir mais um projeto no meu porfolio. 🚀"},
      { type: 'link', content: 'https://github.com/oliniski'},
    ],
    publishedAt: new Date('2024-08-10 13:00:00'),
  },
];

export function App() {
  return (
    <>
    <Header />

    <div className={styles.wrapper}>
      <Sidebar />

      <main>
        {posts.map(post => {
          return (
            <Post 
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ) 
        })}
        
      </main>
    </div>
    </>
  )
}
