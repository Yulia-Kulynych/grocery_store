import React, {Component} from 'react'

export const Buttons = (props)=>{ //export class Buttons extends Component {
    //render(){
        return(
            <div>
            <button
            onClick = {props.onAdd}//onClick = {this.props.onAdd}
            >
            Add Element </button>
            
            <button
            onClick = {props.onDelete}// onClick = {this.props.onDelete}
            >
            Delete Element </button>
        </div>
        )
  //  }
}