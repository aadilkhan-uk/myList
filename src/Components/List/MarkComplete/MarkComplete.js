import React from 'react'
import styles from './MarkComplete.module.css'

function MarkComplete(props) {

    let iconStyle = ["fas fa-check",styles.Icon]
    let initialStyle = styles.MarkComplete;

    console.log(props.noItems);

    if(props.noItems == 0){
        initialStyle = styles.MarkCompleteDisabled;
    }

    return (
        <button className={initialStyle} onClick={props.clicked}>
            <i className={iconStyle.join(" ")}></i>
        </button>
    )
}

export default MarkComplete
