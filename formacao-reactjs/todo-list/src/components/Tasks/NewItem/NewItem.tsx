import { Input } from '../../Input/Input'
import { Button } from '../../Button/Button'

import styles from './NewItem.module.css'

interface Props {
    inputValue: string,
    changeEvent: (evt: React.ChangeEvent<HTMLInputElement>) => void,
    clickEvent: () => void
}

export function NewItem({ inputValue, changeEvent, clickEvent }: Props) {
    return (
        <div className={styles.newTaskWrapper}>
            <Input onChange={changeEvent} value={inputValue} maxLength={80}/>
            <Button onClick={clickEvent} />
        </div>
    )
}