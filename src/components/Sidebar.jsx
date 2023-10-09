import styles from './Sidebar.module.css'
import {Avatar} from './Avatar'
/* import sidebarLogo from '../assets/sidebar-header2.jpg' */
import { PencilLine } from "@phosphor-icons/react";
export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" />
            <div className={styles.profile}>
                <Avatar  src="https://avatars.githubusercontent.com/u/53489752?v=4" />
                <strong>Leslie Alexander</strong>
                <span>UI Designer</span>
            </div>
            <footer>
               
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil</a>
            </footer>
            
        </aside>
    )
}