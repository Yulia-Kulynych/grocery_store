import React, {Component} from 'react';
import './Modal.css';

export class Modal extends Component {
    render(){
        return (
            <div className="modal">
                <p>{this.props.element.name}</p>
            </div>
        )
    }
}