import React from 'react'
import ListMaker from '../../Container/ListMaker/ListMaker'
import Aux from '../../hoc/Aux/Aux'
import Toolbar from '../Toolbar/Toolbar'

function Layout() {
    return (
        <Aux>
            <Toolbar />
            <ListMaker />
        </Aux>
    )
}

export default Layout
