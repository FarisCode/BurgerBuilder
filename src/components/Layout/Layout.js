import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }
    SideDrawerClosedHandler = () => {
        this.setState({
            showSideDrawer: false
        });
    }
    SideDrawerOpenHandler = () => {
        this.setState({
            showSideDrawer: true
        });
    }
    render() {
        return (
            <Aux>
                <Toolbar menuClicked={this.SideDrawerOpenHandler}/>
                <SideDrawer open={this.state.showSideDrawer} closed={this.SideDrawerClosedHandler} />
                <main className={classes.content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout;