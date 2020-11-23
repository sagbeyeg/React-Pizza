import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {

  state = {
    pizzas: [],
    pizzaObj: {
      id: '',
      topping: '',
      size: 'Small',
      vegetarian: ''
    }
  }

  componentDidMount = () => {
    const pizzas = 'http://localhost:3000/pizzas'

    fetch(pizzas)
    .then(resp => resp.json())
    .then(pizzaObjs => {
      this.setState({pizzas: pizzaObjs})
    })
  }

  clickHandler = (pizza) => {
    this.setState({
      pizzaObj: {
        id: pizza.id,
        topping: pizza.topping,
        size: pizza.size,
        vegetarian: pizza.vegetarian,
      }
    }, () => console.log(this.state))
  }

  changeHandler = (event) => {
    // console.log(event.target.value)

    this.setState({
      pizzaObj: {...this.state.pizzaObj, [event.target.name]: event.target.value}
      
    }, () => console.log(this.state.pizzaObj))
  }

  radioChangeHandler = (event) => {
    console.log(event.target)
    if (event.target.value === "Vegetarian") {
      this.setState({
        pizzaObj: {...this.state.pizzaObj, vegetarian: true}
      }, () => console.log(this.state.pizzaObj.vegetarian))
    } else if (event.target.value === "Not Vegetarian") {
      this.setState({
        pizzaObj: {...this.state.pizzaObj, vegetarian: false}
      })
    }
  }

  submitHandler = (e) => {
    // console.log("Hi")
    e.preventDefault()
    const pizzaId = this.state.pizzaObj.id
    const configObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify({
        topping: this.state.pizzaObj.topping,
        size: this.state.pizzaObj.size,
        vegetarian: this.state.pizzaObj.vegetarian,
      })
    }
    
    fetch(`http://localhost:3000/pizzas/${pizzaId}`, configObj)
    .then(resp => resp.json())
    .then(pizza => {
      console.log(pizza)
      let copiedArray = [...this.state.pizzas]
      let idx = copiedArray.findIndex(dog => dog.id === pizza.id)
      copiedArray[idx] = pizza
      this.setState({pizzas: copiedArray})
    })
    console.log(this.state.pizzas)

    this.setState({
      pizzaObj: {
        id: '',
        topping: '',
        size: 'Small',
        vegetarian: ''
      }
    })
  }


  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm editPizza={this.editPizza} pizzaObj={this.state.pizzaObj} changeHandler={this.changeHandler} radioChangeHandler={this.radioChangeHandler} submitHandler={this.submitHandler}/>
        <PizzaList pizzas={this.state.pizzas} clickHandler={this.clickHandler}/>
        {/* {console.log(this.state.pizzaObj)} */}
      </Fragment>
    );
  }
}

export default App;
