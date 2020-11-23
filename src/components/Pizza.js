import React from "react"

class Pizza extends React.Component {

  localClickHandler = () => {
    // console.log(this.props.pizza)
    this.props.clickHandler(this.props.pizza)
  }

  render() {
    const { pizza } = this.props

    return(
      <tr>
        {/* {console.log(pizza)} */}
        <td>{pizza.topping}</td>
        <td>{pizza.size}</td>
        <td>{pizza.vegetarian.toString()}</td>
        <td><button type="button" className="btn btn-primary" onClick={this.localClickHandler}>Edit Pizza</button></td>
      </tr>
    )
  }
}

export default Pizza
