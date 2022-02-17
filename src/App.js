import React, {useState} from 'react';
import './App.css';
import {Buttons} from './Buttons.js';
import {Modal} from './Modal.js';

let initialState = {
      ModalVisible: false,
      elementIndexToView:{},
      products: [//массив обьектов - продуктов
        {
          name:'Milk',
          quantity: 'liter',
          price: 10,
          category: 'Milk_products'
        },
        {
          name:'Cheese',
          quantity: 'kilogram',
          price: 100,
          category: 'Milk_products'
        },
        {
          name:'Orange',
          quantity: 'kilogram',
          price: 20,
          category: 'Fruits'
        },
        {
          name:'Grape',
          quantity: 'kilogram',
          price: 60,
          category: 'Fruits'
        },
        {
          name:'juice',
          quantity: 'liter',
          price: 20,
          category: 'Drinks'
        },
        {
          name:'Wine',
          quantity: 'liter',
          price: 500,
          category: 'Drinks'
        }
      ]
  
}

export let App=()=>{

  //let [state, setState] = useState(initialState)
 let [ModalVisible, setModalVisible] = useState(initialState.ModalVisible)
 let [products, setProducts] = useState(initialState.products)
 


  let handleChange=(event, index, inputName )=>{
    let updatedElement={
      ...products[index],//...state.products[index],
      [inputName]: event.target.value,
    };
    let updatedProducts = [...products];//let updatedProducts = [...this.state.products];
  updatedProducts[index] = updatedElement;

  setProducts(updatedProducts);
}

let addNewProduct=(product)=>{
  setModalVisible (false);
  setProducts( [...products, product]);
}

let onModalClose=()=>{
  setModalVisible (false);
  }

  return (<div className="App">
     { ModalVisible===true ? ( //this.state.ModalVisible===true ? (
        <Modal
        addNewProducts={addNewProduct}
        onModalClose={onModalClose}
        />
      ): null
      }
      
      { products.map( //this.state.products.map(//получаем каждый эелемент - то есть обьект(продукт)
        (element, index)=>{
          return (
                <div>
                  <input 
                  value={element.name} 
                  onChange={(event)=>{handleChange(event, index, "name")}}/>

                  <input value={element.quantity}
                  onChange={(event)=>{handleChange(event, index, "quantity")}}/>
                  
                  <input value={element.price}
                  onChange={(event)=>{handleChange(event, index, "price")}}/>
                  
                  
                  <input value={element.category}
                  onChange={(event)=>{handleChange(event, index, "category")}}/>
               </div>
           )
        }
      ) 
    }
    
    
    <Buttons 
    onDelete ={()=>{

      setProducts(products.slice(0, products.length-1))
      // setState({ //для модификации
      //   products: this.state.products.slice(0, state.products.length-1)
      //     }
      //  )
      }
    }

    onAdd = {()=>{
      setModalVisible( true);
    }
  }
     />
    </div>
)
};