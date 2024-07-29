import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props){
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'Все товары'
                },
                {
                    key: 'top',
                    name: 'Верх'
                },
                {
                    key: 'bottom',
                    name: 'Низ'
                },
                {
                    key: 'shoes',
                    name: 'Обувь'
                },
                {
                    key: 'accessories',
                    name: 'Аксессуры'
                },
            ],
        }
    }
  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el => (
            <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
        ))}
      </div>
    )
  }
}

export default Categories