import styles from './Info.module.css'

interface Props {
    counter: number,
    status: number
}

export function Info({ counter = 0, status = 0 }: Props){
    return (
        <div className={styles.infoWrapper}>
            <ul className={styles.infoItems}>
                <li className={styles.infoItem}>
                    <span>Tarefas criadas</span>
                    <span className={styles.infoCount}>{counter}</span>
                </li>
                <li className={styles.infoItem}>
                    <span>Concluídas</span>
                    <span className={styles.infoCount}>
                        {
                            counter === 0
                            ? counter
                            : `${status} de ${counter}`
                        }
                    </span>
                </li>
            </ul>
        </div>
    )
}