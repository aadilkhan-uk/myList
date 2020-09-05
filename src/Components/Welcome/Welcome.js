import React, { Component } from 'react';
import styles from './Welcome.module.css';
import {Route, Link, Redirect} from 'react-router-dom'
import Toolbar from '../Toolbar/Toolbar';
import ListMaker from '../../Container/ListMaker/ListMaker';

export class Welcome extends Component {
    render() {
        return (
            <div>
                <Route path="/mylist" exact render={() => 
                    <div class={styles.MainContainer}>
                        <h2>Welcome to myList</h2>
                        <p>To get started click the proceed button!</p>
                        <Link to="/mylists">
                            <button>PROCEED</button>
                        </ Link>
                    </div>
                } />
                <Route path="/" exact render={() => 
                    <div class={styles.MainContainer}>
                        <h2>Welcome to myList</h2>
                        <p>To get started click the proceed button!</p>
                        <Link to="/mylists">
                            <button>PROCEED</button>
                        </ Link>
                    </div>
                } />
                <Route path="/mylists" component={Toolbar}/>
                <Route path="/mylists" component={ListMaker} />

            </div>
        )
    }
}

export default Welcome
