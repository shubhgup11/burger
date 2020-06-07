import React, { useState } from 'react';

import classes from './layout.module.css'
import Toolbar from '../../Navigation/Toolbar/Toolbar';
import SideDrawer from '../../Navigation/SideDrawer/SideDrawer';


const Layout = (props) => {
    const [sideDropOpen,SideDropOpenHandler]=useState(false);

    const MenuClickHandler=()=>
    {
        SideDropOpenHandler(!sideDropOpen);
    }


    return(
        <React.Fragment>
            {/* <div> Toolbar Sidebar Backdrop</div> */}
            <Toolbar clickMenu={()=>MenuClickHandler()}></Toolbar>
            <SideDrawer open={sideDropOpen} sideDropClose={()=>SideDropOpenHandler(!sideDropOpen)}></SideDrawer>
            <main className={classes.Content}>{props.children}</main>
        </React.Fragment>);
}
export default Layout;