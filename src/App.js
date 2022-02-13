import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Buttons} from './Buttons.js';
import {Modal} from './Modal.js';


class App extends Component {
  constructor (props){
    super (props);
    this.state = {
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

    this.handleChange = this.handleChange.bind(this);
    this.addNewProduct = this.addNewProduct.bind(this);
    this.onModalClose = this.onModalClose.bind(this);
  }


handleChange(event, index, inputName ){
  let updatedElement={
  ...this.state.products[index],
    [inputName]: event.target.value,
  };

  let updatedProducts = [...this.state.products];
  updatedProducts[index] = updatedElement;

  this.setState({
    ...this.state,
    products : updatedProducts,
  });
}

addNewProduct(product){
  this.setState({
    ...this.state,
    ModalVisible: false,
    products: [...this.state.products, product],

  }
  );
}
onModalClose(){
  this.setState({
    ...this.state,
    ModalVisible: false,
    
  }
  );
}

render (){
  return (
    <div className="App">
      {this.state.ModalVisible===true ? (
        <Modal
        addNewProducts={this.addNewProduct}
        onModalClose={this.onModalClose}
        />
      ): null
      }
      
      {this.state.products.map(//получаем каждый эелемент - то есть обьект(продукт)
        (element, index)=>{
          return (
                <div>
                  <input 
                  value={element.name} 
                  onChange={(event)=>{this.handleChange(event, index, "name")}}/>

                  <input value={element.quantity}
                  onChange={(event)=>{this.handleChange(event, index, "quantity")}}/>
                  
                  <input value={element.price}
                  onChange={(event)=>{this.handleChange(event, index, "price")}}/>
                  
                  
                  <input value={element.category}
                  onChange={(event)=>{this.handleChange(event, index, "category")}}/>
               </div>
           )
        }
      ) 
    }
    
    
    <Buttons 
    onDelete ={()=>{
      this.setState({ //для модификации
        products: this.state.products.slice(0, this.state.products.length-1)
          }
        )
      }
    }

    onAdd = {()=>{
      this.setState({ //для модификации
        ...this.state,
        ModalVisible: true,
       }
      );
    }
  }
     />
    </div>
  )
  }

}
export default App;
