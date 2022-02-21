import React, { useState} from 'react';
import './Modal.css';
import { v4 as uuidv4 } from "uuid";


const initialModalState = {
    name:'',
    quantity: '',
    price: '',
    category: '',
    show: true,
    id: uuidv4(),
  };


export const Modal= (props)=> {
   
    
    const [modalState, setStateModalState] = useState(initialModalState)
        //let [ModalVisible, setModalVisible] = useState(initialState, ModalVisible)

        //this.handleChange = this.handleChange.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
    


   const handleChange=(event, inputName )=>{// handleChange(event, inputName ){
    setStateModalState ({//  this.setState({
        ...modalState,//...this.state,
          [inputName]: event.target.value,
        });
    }

    const handleSubmit=(event)=>{ //handleSubmit(event){
        event.preventDefault();
        props.addNewProducts({...modalState, id: uuidv4()})
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
           
        );
    };


