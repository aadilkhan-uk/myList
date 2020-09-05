import React from 'react'
import styles from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'

function NavigationItems() {
    return (
        <nav className={styles.NavigationItems}>
            <NavigationItem>home</NavigationItem>
        </nav>
    )
}

export default NavigationItems
