import React, { useState} from 'react';
import './Modal.css';


let initialModalState = {
    name:'',
    quantity: '',
    price: '',
    category: '',
  };


export let Modal= (props)=> {
   
    
    let [modalState, setStateModalState] = useState(initialModalState)
        //let [ModalVisible, setModalVisible] = useState(initialState, ModalVisible)

        //this.handleChange = this.handleChange.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
    


   let handleChange=(event, inputName )=>{// handleChange(event, inputName ){
    setStateModalState ({//  this.setState({
        ...modalState,//...this.state,
          [inputName]: event.target.value,
        });
    }

    let handleSubmit=(event)=>{ //handleSubmit(event){
        event.preventDefault();
        props.addNewProducts(modalState,)
    }

        //render(){
        return (
            
                <div className="modal">
                    <form onSubmit={(e)=>handleSubmit(e)}>
                    <div>
                    <label> Name </label>
                  <input 
                  value={modalState.name} 
                  onChange={(event)=>{handleChange(event, "name")}}/>
                  </div>
                    <div>    
                    <label>Quantity</label>
                  <input value={modalState.quantity}
                  onChange={(event)=>{handleChange(event, "quantity")}}/>
                    </div> 
                    <div>  
                    <label> Price </label>
                  <input value={modalState.price}
                  onChange={(event)=>{handleChange(event,  "price")}}/>
                    </div>
                    <div>   
                    <label>Category</label>
                  <input value={modalState.category}
                  onChange={(event)=>{handleChange(event, "category")}}/>
                    </div> 
                  <button type="submit">Save products</button>
                  <button type="button" onClick={()=>props.onModalClose()}>Close</button>
                  </form>
               </div>
           
        )
    }


