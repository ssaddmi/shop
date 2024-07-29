import React, { Component } from 'react'

export class Item extends Component {
  render() {
    const imagePath = `${process.env.PUBLIC_URL}/img/items/${this.props.item.id}/${this.props.item.img}`;

    return (
      <div className='item'>
        <img src={imagePath} onClick={() => this.props.onShowItem(this.props.item)} alt={this.props.item.title} />
        <h2>{this.props.item.title}</h2>
        <p>{this.props.item.descshort}</p>
        <b>{this.props.item.price}₽</b>
        <div className='add-to-cart' onClick={() => this.props.onAdd(this.props.item)}>+</div>
      </div>
    )
  }
}

export default Item