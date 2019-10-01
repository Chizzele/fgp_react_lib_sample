import React, { Component } from 'react'
import './myfile.css'
export class MyTest extends Component {
    render() {
        return (
            <div className={"fgReact_home"}>
                {this.props.children}
            </div>
        )
    }
}

export default MyTest
