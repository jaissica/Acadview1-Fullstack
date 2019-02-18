import React, { Component } from 'react';
class Display extends Component{
    render(){
        return(
                <div style={{
                    margin: '20px 0px 0px 560px',
                    border: '2px solid black',
                    background: 'white',
                    width: '220px'}}>
                <div>Name:{this.props.name}</div>
                <div>Age:{this.props.age}</div>
                <div>Birth-month:{this.props.birthMonth}</div>
                <form>
                <input type="text" placeholder={this.props.name}></input>
                </form>
                </div>
               
             
                
            )
    }
}
export default Display;