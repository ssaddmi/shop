import React, { Component } from 'react'
import { FaTrash } from "react-icons/fa"


export class Order extends Component {
  
  handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    if (!isNaN(newQuantity) && newQuantity > 0) {
      this.props.changeQuantity(this.props.item.id, newQuantity);
    }
  };

  render() {
    const imagePath = `${process.env.PUBLIC_URL}/img/items/${this.props.item.id}/${this.props.item.img}`;

    
    

    return (
      <div className='item'>
        <img src={imagePath} />
        <h2>{this.props.item.title}</h2>
        <b>{this.props.item.price}₽</b>
        <FaTrash className='delete-icon' onClick={() => this.props.onDeleteAllQuantity(this.props.item.id)}/>
        <div className="quantity">
          <div className='counter-minus' onClick={() => this.props.onDelete(this.props.item.id)}>-</div>
          <div className='counter'><input type="text" value={this.props.item.quantity} onChange={this.handleQuantityChange}></input></div>
          <div className='counter-plus' onClick={() => this.props.onAdd(this.props.item)}>+</div>
        </div> 
        
      </div>
    )
  }
}

export default Order