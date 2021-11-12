import React, { Component,PureComponent } from 'react'
import PureComp from './PureComp';
import RegularComp from './RegularComp';

 class Parentcomp extends PureComponent {
constructor(props) {
    super(props)

    this.state = {
         name: 'abdul-parentcompnew'
    }
}

    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: 'abdul-parentcomp'
            })
        }, 2000);
    }

    render() {
        console.log('******************* parent component************************')
        return (
            <div>
                Parent component
                <RegularComp name ={this.state.name}></RegularComp>
                <PureComp name = {this.state.name}></PureComp>
            </div>
        )
    }
}

export default Parentcomp