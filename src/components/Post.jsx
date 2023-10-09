import { Comment } from './Comment';
import {Avatar} from './Avatar'
import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                     <Avatar src="https://avatars.githubusercontent.com/u/53489752?v=4" />
                    <div className={styles.authorInfo}>
                        <strong>Antonio Alexandre</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time title="09 de outubro de 2023" dateTime="2023-10-09 07:31:00">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
                </p>
                <p>
                    👉{" "}<a href="#">jane.design/doctorcare</a>
                </p>
                <p>
                    <a href="#">#novoprojeto</a>{" "}
                    <a href="#">#nlw</a>{" "}
                    <a href="#">#rocketseat</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu Feedback</strong>
                <textarea
                    placeholder='Escreva um comentário... '
                />
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>
            
            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment/>
            </div>
       </article>
    )
}