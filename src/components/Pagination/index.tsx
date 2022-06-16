import React, { useState } from "react"
import styles from './Pagination.module.scss'

export const Pagination = ({currentPage, totalPage}) => {

    const [current, setCurrent] = useState(currentPage as number)

    const items: number[] = []
    for (let index = 0; index < totalPage; index++) {
        items.push(index+1)
    }

    return (
        <ul className={styles.list}>
            {items.map(item => 
                <li 
                    key={item} 
                    className={item==current ? `${styles.item} ${styles.item_current}` : styles.item}
                    onClick={()=>{setCurrent(item)}}
                >
                    {item}
                </li>
                    )}
            
        </ul>
    )
}