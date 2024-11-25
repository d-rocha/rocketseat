import { Info } from '../Info/Info';
import { Empty } from '../Empty/Empty';

import styles from './List.module.css'

export function List() {
    return (
        <div className={styles.listWrapper}>
            <Info />

            <div className={styles.listContent}>
                <Empty />
            </div>
        </div>
    );
}