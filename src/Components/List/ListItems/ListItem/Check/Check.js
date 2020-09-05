import React from 'react'
import styles from './Check.module.css'

function Check(props) {
    return (
        <div onClick={() => props.checkClick(props.itemKey)} className={styles.Check}>
            
        </div>
    )
}

export default Check
