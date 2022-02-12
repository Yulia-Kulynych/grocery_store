import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Buttons} from './Buttons.js';
import {Modal} from './Modal.js';


class App extends Component {
  constructor (props){
    super (props);
    this.state = {

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

    //this.handleChange = this.handleChange.blind(this);
  }


handleChange(event){
  this.setState({
    name: event.target.name
  })
}

render (){
  return (
    <div className="App">

     <Modal element = {this.state.products[this.state.elementIndexToView]}/> 
      
      {this.state.products.map(//получаем каждый эелемент - то есть обьект(продукт)
        (element)=>{
          return (
                <div>
                  <input 
                  value={element.name} 
                  onChange={this.handleChange}/>

                  <input value={element.quantity}
                  onChange= {(event)=>this.setState({
                    quantity: event.target.quantity}
                  
                  )}/>
                  
                  <input value={element.price}
                  onChange= {(event)=>this.setState({
                    price: event.target.price}
                  )}/>
                  {console.log(element.price)}
                  <input value={element.category}
                  onChange= {(event)=>this.setState({
                    category: event.target.category}
                  )}/>
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
        products:[...this.state.products,
          {
            name: "Buckwheat",
            quantity: "kilogram",
            price: 20, 
            category: "Grain" 
          }
         ]
       }
      )
    }
  }
     />
    </div>
  )
  }

}
export default App;
