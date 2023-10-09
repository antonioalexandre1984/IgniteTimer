import { ThumbsUp, Trash } from '@phosphor-icons/react';
import styles from './Comment.module.css';
import {Avatar} from './Avatar'

export function Comment() {
    return (
        <div className={styles.comment}>
            <Avatar
                hasBorder={false}
                src="https://avatars.githubusercontent.com/u/53489752?v=4" />
            
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Diego Fernandes</strong>
                             <time title="09 de outubro de 2023" dateTime="2023-10-09 07:31:00">Cerca de 1 hora atrás</time>
                        </div>
                        <button title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>Muito bom Devon, parabéns!! 👏👏</p>
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