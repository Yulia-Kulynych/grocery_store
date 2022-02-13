import React, {Component} from 'react';
import './Modal.css';

export class Modal extends Component {
    constructor(props){
        super(props);
        this.state = {
          name:'',
          quantity: '',
          price: '',
          category: '',
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event, inputName ){
        this.setState({
        ...this.state,
          [inputName]: event.target.value,
        });
    }

        handleSubmit(event){
            event.preventDefault();
            this.props.addNewProducts(this.state)
        }

        render(){
        return (
            
                <div className="modal">
                    <form onSubmit={(e)=>this.handleSubmit(e)}>
                    <div>
                    <label> Name </label>
                  <input 
                  value={this.state.name} 
                  onChange={(event)=>{this.handleChange(event, "name")}}/>
                  </div>
                    <div>    
                    <label>Quantity</label>
                  <input value={this.state.quantity}
                  onChange={(event)=>{this.handleChange(event, "quantity")}}/>
                    </div> 
                    <div>  
                    <label> Price </label>
                  <input value={this.state.price}
                  onChange={(event)=>{this.handleChange(event,  "price")}}/>
                    </div>
                    <div>   
                    <label>Category</label>
                  <input value={this.state.category}
                  onChange={(event)=>{this.handleChange(event, "category")}}/>
                    </div> 
                  <button type="submit">Save products</button>
                  <button type="button" onClick={()=>this.props.onModalClose()}>Close</button>
                  </form>
               </div>
           
        )
    }

}