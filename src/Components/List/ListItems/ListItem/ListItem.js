import React from 'react'
import styles from './ListItem.module.css'
import Check from './Check/Check'

function ListItem(props) {

    let stylesArray = [styles.ListItem];

    if(props.cross){
        stylesArray.push(styles.Cross);
    }

    return (
        <div className={styles.ItemContainer}>
            <div className={stylesArray.join(' ')}>
                <p>{props.instruction}</p>
                <Check itemKey={props.itemKey} checkClick={props.clicked} />
            </div>
        </div>
    )
}

export default ListItem
