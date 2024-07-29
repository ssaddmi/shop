
import React, { Component } from 'react'
import { MdClose } from "react-icons/md"

export class ShowFullItem extends Component {
  render() {
    const imagePath = `${process.env.PUBLIC_URL}/img/items/${this.props.item.id}/${this.props.item.img}`;

    return (
      <div className='full-item'>
        <div>
            <img src={imagePath} onClick={() => this.props.onShowItem(this.props.item)} />
            <MdClose className='full-item-cancel' onClick={() => this.props.onShowItem(this.props.item)}/>
            <h2>{this.props.item.title}</h2>
            <p>{this.props.item.desc}</p>
            <b>{this.props.item.price}₽</b>
            <div className='add-to-cart' onClick={() => this.props.onAdd(this.props.item)}>+</div>
        </div>
      </div>
    )
  }
}

export default ShowFullItem