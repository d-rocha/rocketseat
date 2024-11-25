import { Check, Trash } from 'phosphor-react'

import { Input } from '../../Input/Input'

import styles from './Item.module.css'

export function Item() {
    const checkStatus = <Check size={12} />

    return (
        <div className={styles.itemWrapper}>
            <label htmlFor="checkbox">
                <Input 
                    readOnly
                    type="checkbox"
                />

                <span className={styles.itemCheckbox}>
                    {checkStatus}
                </span>

                <p>aishdiaushdiashdaisdhaids</p>
            </label>

            <button>
                <Trash size={16} />
            </button>
        </div>
    )
}