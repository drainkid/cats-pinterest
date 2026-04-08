import {NavLink} from 'react-router';
import styles from './navBar.module.css';

export const NavBar = () => {
            return (
                <div className={styles.navBar}>
                    {/* Оборачиваем в контейнер, чтобы выровнять по центру/краю, если нужно */}
                    <div className={styles.container}>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? `${styles.link} ${styles.active}` : styles.link
                            }
                        >
                            Все котики
                        </NavLink>

                        <NavLink
                            to="/favorites"
                            className={({ isActive }) =>
                                isActive ? `${styles.link} ${styles.active}` : styles.link
                            }
                        >
                            Любимые котики
                        </NavLink>
                    </div>
                </div>
            );
        };

