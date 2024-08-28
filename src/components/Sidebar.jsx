import { PencilLine } from '@phosphor-icons/react';
import { Avatar } from './Avatar';

import styles from './Sidebar.module.css';
export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img 
        className={styles.coverImage}
        src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
      />

      <div className={styles.profile}>
        <Avatar 
          src="https://github.com/oliniski.png"
        />
          <strong>Bruno Oliniski</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine
            size={20}
            className={styles.pencilIcon} 
          />
          Editar Perfil
        </a>
      </footer>
    </aside>
  )
}