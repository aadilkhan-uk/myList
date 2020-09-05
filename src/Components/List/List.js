import React from 'react'
import styles from './List.module.css'

function List(props) {
    return (
        <div className={styles.List}>
            {props.children}
        </div>
    )
}

export default List
