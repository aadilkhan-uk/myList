import React, { Component } from 'react'
import List from '../../Components/List/List'
import Add from '../../Components/List/AddMore/AddMore'
import styles from './ListMaker.module.css'
import MarkComplete from '../../Components/List/MarkComplete/MarkComplete'
import ListItems from '../../Components/List/ListItems/ListItems'
import Modal from '../../Components/UI/Modal/Modal'
import Aux from '../../hoc/Aux/Aux'

export class ListMaker extends Component {

    state = {
        listItems: [],
        title: "",
        modal: false,
        resetModal: false,
        itemsToCross: [],
        enableMark: false,
    };

    addInstructionHandler = () => {
        this.setState({
            modal: !this.state.modal,
        })
    }

    addInstructionToListHandler = (instruction) => {
        const updatedList = [...this.state.listItems];
        updatedList.push(instruction);
        //console.log(updatedList);
        this.setState({
            listItems: updatedList,
            modal: !this.state.modal,
        })
    }

    checkItemHandler = (itemKey) => {
        // let newList = [...this.state.listItems];
        // newList.splice(itemKey, 1);
        let newItems = [...this.state.itemsToCross];
        newItems.push(itemKey);
        this.setState({
            // listItems: newList,
            itemsToCross: newItems,
        })
    }

    finishListHandler = () => {
        let cleanList = [];
        let cleanItemsToCross = [];
        this.setState({
            itemsToCross: cleanItemsToCross,
            listItems: cleanList,
        })
    }

    render() {


        return (
            <Aux>
                <Modal show={this.state.modal} close={this.addInstructionHandler} add={this.addInstructionToListHandler} />
                <List title={this.state.title} className={styles.ListContainer}>
                    <section className={styles.Top}>
                        <Add clicked={this.addInstructionHandler} />
                        <MarkComplete clicked={this.finishListHandler} noItems={this.state.listItems.length}/>
                    </section>
                    <section className={styles.TitleContainer}>
                     <h3 className={styles.Title}>{this.state.title}</h3>
                    </section>
                    <div className={styles.ListItemsContainer}>
                        {/* {console.log(this.state.listItems + "<- list items going in")} */}
                        {this.state.listItems.length == 0  ? <p>Click the add button at the top to start adding items to your list. Once you're done hit the tick to load a fresh list!</p> : <ListItems crossItems={this.state.itemsToCross} checkItem={this.checkItemHandler} items={this.state.listItems} className={styles.ListItems}/>}
                    </div>
                </List>
            </Aux>
        )

    }
}

export default ListMaker
