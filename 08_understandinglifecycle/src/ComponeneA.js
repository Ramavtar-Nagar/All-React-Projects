import React from "react";

export default class ComponentA extends React.Component{

    constructor(){
        super();
        this.state = {
            name: " Component A"
        }
        console.log("ComponentA Constructor");
    }

    static getDerivedStateFromProps(){
        console.log("ComponentA getDerivedStateFromProps");
        return null;
    }

    componentDidMount(){
        console.log("ComponentA componentDidMount");
    }

    render(){
        console.log("ComponentA Render");
        return(
            <div>
                <h1>
                    {this.state.name}
                </h1>
            </div>
        )
    }
}