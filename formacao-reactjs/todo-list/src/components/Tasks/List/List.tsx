import { Info } from '../Info/Info';
import { Empty } from '../Empty/Empty';
import { Item } from '../Item/Item';
import { ITask } from '../Tasks';

import styles from './List.module.css'

interface Props {
    items: Array<ITask>,
    statusCounter: number,
    removeEvent: (id: number) => void,
    statusEvent: (id: number, hasChecked: boolean) => void
}

export function List({ items, statusCounter, removeEvent, statusEvent }: Props) {
    return (
        <div className={styles.listWrapper}>
            <Info counter={items.length} status={statusCounter} />

            <div className={styles.listContent}>
                {items.length > 0
                    ? items.map(item => (
                        <Item 
                            key={item.id}
                            data={item}
                            actionRemove={removeEvent}
                            actionStatus={statusEvent}
                        />
                    ))
                    : <Empty />
                }
            </div>
        </div>
    );
}