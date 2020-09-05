import React from 'react'
import styles from './NavigationItem.module.css'
import {Link} from 'react-router-dom'

function NavigationItem(props) {
    return (
        <div className={styles.NavItem}>
            <Link to="/">
                {props.children} 
            </Link >
        </div>
    )
}

export default NavigationItem
