import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"

import styles from "./App.module.css"
import "./global.css"

export function App() {
  return (
    <>
    <Header />

    <div className={styles.wrapper}>
      <Sidebar />

      <main>
        <Post 
          author="Bruno Oliniski" 
          content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem corporis vero, repellat labore animi in dolore odit ipsam sit, doloremque similique totam eaque earum eos? Minus, recusandae natus. Nihil, impedit!"
        />
        <Post 
          author="Bruno Bihuna" 
          content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem corporis vero, repellat labore animi in dolore odit ipsam sit, doloremque similique totam eaque earum eos? Minus, recusandae natus. Nihil, impedit!"
        />
      </main>
    </div>
    </>
  )
}
