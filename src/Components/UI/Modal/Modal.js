import styles from './Modal.module.css'
import Aux from '../../../hoc/Aux/Aux'
import React, { Component } from 'react'

export class Modal extends Component {

    state = {
        instruction: "",
    }

    updateInstruction = (event) => {
        this.setState({
            instruction: event.target.value,
        })
    }

    addClickHandler = () => {
        this.props.add(this.state.instruction);
        this.setState({
            instruction: '',
        })
    }

    render() {

        return (
            this.props.show ? <div className={styles.ModalContainer}>
            <div className={styles.Modal}>
                <div className={styles.ModalMain}>
                    <h4>Add an item to your to-do list: </h4>
                    <input value={this.state.instruction} onChange={this.updateInstruction} type="text"></input>
                </div>
                <div className={styles.ModalFooter}>
                    <button className={styles.Close} onClick={this.props.close}>Close</button>
                    <button className={styles.Add} onClick={this.addClickHandler}>Add</button>
                </div>
            </div>
        </div> : null
        )

    }
}

export default Modal

