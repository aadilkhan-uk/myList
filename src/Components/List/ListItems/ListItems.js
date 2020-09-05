import React from 'react'
import ListItem from './ListItem/ListItem'
import styles from './ListItems.module.css'

function ListItems(props) {

    let ListItems = props.items.map(
        (listItem, index) => <ListItem key={index} cross={props.crossItems.includes(index)} itemKey={index} clicked={props.checkItem} instruction={listItem} />
    )

    return (
        <div className={styles.ListItems}>
            {ListItems}
        </div>
    )
}

export default ListItems
