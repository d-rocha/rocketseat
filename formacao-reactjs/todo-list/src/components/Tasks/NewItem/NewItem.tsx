import { Input } from '../../Input/Input'
import { Button } from '../../Button/Button'

import styles from './NewItem.module.css'

export function NewItem({ changeEvent, clickEvent, inputValue }) {
    return (
        <div className={styles.newTaskWrapper}>
            <Input onChange={changeEvent} value={inputValue} maxLength={80}/>
            <Button onClick={clickEvent} />
        </div>
    )
}