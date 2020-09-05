import React from 'react'
import styles from './AddMore.module.css'

function AddMore(props) {

    let iconStyle = ["fas","fa-plus",styles.Icon]

    return (
        <div onClick={props.clicked} className={styles.AddMore}>
            <i className={iconStyle.join(" ")}></i>
        </div>
    )
}

export default AddMore
