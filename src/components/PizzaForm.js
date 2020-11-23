import React from "react"

class PizzaForm extends React.Component {
  render() {
    const {pizzaObj} = this.props
    return( 
        <div className="form-row">
          <div className="col-5">
              <input type="text" className="form-control" placeholder="Pizza Topping"
              name="topping" 
              value={pizzaObj.topping}
              onChange={this.props.changeHandler}/>
          </div>
          <div className="col">
            <select value={pizzaObj.size} className="form-control" name="size" onChange={this.props.changeHandler}>
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
          </div>
          <div className="col">
            <div className="form-check">
              <input className="form-check-input" type="radio" value="Vegetarian" checked={pizzaObj.vegetarian} onChange={this.props.radioChangeHandler}/>
              <label className="form-check-label">
                Vegetarian
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" value="Not Vegetarian" checked={!pizzaObj.vegetarian} onChange={this.props.radioChangeHandler}/>
              <label className="form-check-label">
                Not Vegetarian
              </label>
            </div>
          </div>
          <div className="col">
            <button type="submit" className="btn btn-success" onClick={this.props.submitHandler}>Submit</button>
          </div>
          {/* {console.log(this.props.topping)} {console.log(this.state.topping)} */}
        </div>
    )
  }
}

export default PizzaForm
