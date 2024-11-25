import { Info } from '../Info/Info';
import { Empty } from '../Empty/Empty';
import { Item } from '../Item/Item';

import styles from './List.module.css'

export function List({ items }) {
    return (
        <div className={styles.listWrapper}>
            <Info counter={items.length} />

            <div className={styles.listContent}>
                {items.length > 0
                    ? items.map(item => (
                        <Item 
                            key={item.id}
                            data={item}
                        />
                    ))
                    : <Empty />
                }
            </div>
        </div>
    );
}