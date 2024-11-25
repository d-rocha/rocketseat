import { NewItem } from './NewItem/NewItem'

import styles from './Tasks.module.css'

export function Tasks() {
    return (
        <main className={styles.tasksWrapper}>
            <NewItem />

            {/* TODO: List items */}
            <div></div>
        </main>
    );
}