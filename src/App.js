import React, {useState, useEffect } from 'react';
import './App.css';
import {Buttons} from './Buttons.js';
import {Modal} from './Modal.js';
import {v4 as uuidv4} from "uuid";

const initialState = {
      filterName: "",
      ModalVisible: false,
      elementIndexToView:{},
      products: [//массив обьектов - продуктов
        {
          id: uuidv4(),
          name:'Milk',
          quantity: 'liter',
          price: 10,
          category: 'Milk_products',
          show: true,
        },
        {
          id: uuidv4(),
          name:'Cheese',
          quantity: 'kilogram',
          price: 100,
          category: 'Milk_products',
          show: true,
        },
        {
          id: uuidv4(),
          name:'Orange',
          quantity: 'kilogram',
          price: 20,
          category: 'Fruits',
          show: true,
        },
        {
          id: uuidv4(),
          name:'Grape',
          quantity: 'kilogram',
          price: 60,
          category: 'Fruits',
          show: true,
        },
        {
          id: uuidv4(),
          name:'juice',
          quantity: 'liter',
          price: 20,
          category: 'Drinks',
          show: true,
        },
        {
          id: uuidv4(),
          name:'Wine',
          quantity: 'liter',
          price: 500,
          category: 'Drinks',
          show: true,
        }
      ]
  
}

export const App=()=>{

  //let [state, setState] = useState(initialState)
 const [ModalVisible, setModalVisible] = useState(initialState.ModalVisible)
 const [products, setProducts] = useState(initialState.products)
 const [filterName, setFilterName] = useState(initialState.filterName)
 


 const handleChange=(event, index, inputName )=>{
  const updatedElement={
      ...products[index],//...state.products[index],
      [inputName]: event.target.value,
    };
    const updatedProducts = [...products];//let updatedProducts = [...this.state.products];
  updatedProducts[index] = updatedElement;

  setProducts(updatedProducts);
}

const addNewProduct=(product)=>{
  setModalVisible (false);
  setProducts( [...products, product]);
}

const onModalClose=()=>{
  setModalVisible (false);
  }
const filteredProducts=(products)=>{
  const filteredProducts = products.map ((product)=>{
    return product.name.toLowerCase().indexOf(filterName.toLowerCase()) > 
    -1 || !filterName || product.category.toLowerCase().indexOf(filterName.toLowerCase())>-1 ?
    {...product, show: true}:
    {...product, show: false};
  });
  return filteredProducts;
};

useEffect (()=>{
  setProducts(filteredProducts(products));
}, [filterName]);


  return (<div className="App">
     { ModalVisible===true ? ( //this.state.ModalVisible===true ? (
        <Modal
        addNewProducts={addNewProduct}
        onModalClose={onModalClose}
        />
      ): null
      }
      <input 
       value = {filterName}
       onChange = {(event)=>{
        setFilterName(event.target.value); 
       }}
      />
      { products.map( //this.state.products.map(//получаем каждый эелемент - то есть обьект(продукт)
        (element, index)=>{
          return element.show ? (
                <div key={element.id}>
                  {console.log(element.id)}
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
           ): null;
        }
      ) 
    }
    
    
    <Buttons 
    onDelete ={()=>{

      setProducts(filteredProducts(products.slice(0, products.length-1)))
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