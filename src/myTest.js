import React, { Component } from 'react'
import './myfile.css'
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
            <div className={"fgReact_home"}>
                Hello world : heres the prop m8 {this.props.myProp}
            </div>
        )
    }
}

export default MyTest
