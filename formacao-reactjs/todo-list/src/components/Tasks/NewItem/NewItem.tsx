import { Input } from '../../Input/Input'
import { Button } from '../../Button/Button'

import styles from './NewItem.module.css'

export function NewItem() {
    return (
        <div className={styles.newTaskWrapper}>
            <Input  />
            <Button />
        </div>
    )
}