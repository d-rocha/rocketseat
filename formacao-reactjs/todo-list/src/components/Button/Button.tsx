import { PlusCircle } from 'phosphor-react'

import styles from './Button.module.css'

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

export function Button({ ...rest }: Props ) {
    return (
        <button className={styles.todoButton} {...rest}>
            <span>Criar</span>
            <PlusCircle size={16} color="#FFFFFF" weight="bold"/>
        </button>
    );
}