import React, { Component } from 'react'
import './myfile.css'
import {Navigation} from '@chizzele-/fgp_react_lib'
export class MyTest extends Component {
    constructor(props){
        super(props)
        this.state={
            dataLink : true
        }
        console.log(this.state, this.props)    
    }
    render() {
        return (
            <div className={""}>
            <Navigation
                isOpen={this.props.isOpen}
                topNavTitle={"Compass - Operations links"}
                sideNavLogo={this.props.logo}
                currentPage={"/operations"}
                items={this.props.navItems}
            />
            </div>
        )
    }
}

export default MyTest
