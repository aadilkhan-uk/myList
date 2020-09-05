import React from 'react'
import styles from './Toolbar.module.css'
import NavigationItems from './NavigationItems/NavigationItems'

function Toolbar() {
    return (
        <div className={styles.Toolbar}>
            <h3 className={styles.Logo}>myList</h3>
            <NavigationItems />
        </div>
    )
}

export default Toolbar
