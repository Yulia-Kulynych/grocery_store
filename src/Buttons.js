import React, {Component} from 'react'

export class Buttons extends Component {
    render(){
        return(
            <div>
            <button
            onClick = {this.props.onAdd}
            >
            Add Element </button>
            
            <button
            onClick = {this.props.onDelete}
            >
            Delete Element </button>
        </div>
        )
    }
}