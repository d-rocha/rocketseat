import { Check, Trash } from 'phosphor-react'

import { ITask } from '../Tasks'
import { Input } from '../../Input/Input'

import styles from './Item.module.css'

interface Props {
    data: ITask,
    actionRemove: (id: number) => void,
    actionStatus: (id: number, hasChecked: boolean) => void
}

export function Item({ data, actionRemove, actionStatus }: Props) {
    const handleRemoveItem = () => {
        actionRemove(data.id)
    }

    const handleStatusItem = () => {
        actionStatus(data.id, !data.isChecked)
    }

    const checkboxStatus = data.isChecked 
        ? styles.itemCheckboxChecked
        : styles.itemCheckboxUnchecked

    const lineThrough = data.isChecked 
        ? styles.itemChecked
        : styles.itemUnchecked

    
    const checkStatus = data.isChecked && <Check size={12} />

    return (
        <div className={styles.itemWrapper}>
            <label htmlFor="checkbox" onClick={handleStatusItem}>
                <Input 
                    readOnly
                    type="checkbox"
                    checked={data.isChecked}
                />

                <span className={`${styles.itemCheckbox} ${checkboxStatus}`}>
                    {checkStatus}
                </span>

                <p className={`${lineThrough}`}>{data.content}</p>
            </label>

            <button onClick={handleRemoveItem}>
                <Trash size={16} />
            </button>
        </div>
    )
}