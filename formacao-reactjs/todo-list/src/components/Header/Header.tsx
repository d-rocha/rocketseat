import logo from '../../assets/logo.svg'

import styles from './Header.module.css'

export function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.logoWrapper}>
                <img src={logo} alt="Logo" />

                <div className={styles.logoSpan}>
                    <span>to</span>
                    <span>do</span>
                </div>
            </div>
        </header>
    )
}