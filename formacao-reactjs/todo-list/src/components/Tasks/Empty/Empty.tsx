import clipboardIcon from '../../../assets/ic-clipboard.svg'

import styles from './Empty.module.css'

export function Empty() {
    return (
        <div className={styles.emptyWrapper}>
            <div className={styles.emptyContent}>
                <img src={clipboardIcon} alt="Imagem de prancheta" />

                <strong>Você ainda não tem tarefas cadastradas</strong>
                <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
        </div>
    )
}