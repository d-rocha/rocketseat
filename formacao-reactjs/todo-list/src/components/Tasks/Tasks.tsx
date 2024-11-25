import { NewItem } from './NewItem/NewItem'
import { List } from './List/List';

import styles from './Tasks.module.css'

export function Tasks() {
    return (
        <main className={styles.tasksWrapper}>
            <NewItem />

            <List />
        </main>
    );
}