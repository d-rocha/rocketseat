import styles from './Input.module.css'

type Props = React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
>

export function Input({ ...rest }: Props) {
    return (
        <input 
            placeholder="Adicione uma nova tarefa"
            className={styles.todoInput}
            {...rest}
        />
    );
}