import { Component } from 'react'
import MonsterCard from '../monster-card/monster-card.component'

import './card-list.styles.css'


class CardList extends Component {


  render() {
    const { monsters } = this.props

    return (
      <div className='card-list'>
        { monsters.map((monster) => {
          return (<MonsterCard monster={monster} />)
      })}
    </div>
    )
  }
}

export default CardList
