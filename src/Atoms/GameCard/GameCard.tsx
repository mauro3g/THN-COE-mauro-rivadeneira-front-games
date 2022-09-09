import React from 'react'

interface Props {
  image: string,
  title: string,
  description: string,
  imageStyles?: React.CSSProperties,
  textStyles?: React.CSSProperties
}

const GameCard = (props: Props) => {
  return (
    <div className='game-card'>
      <img src={props.image} alt={`${props.title}`} style={{...props.imageStyles}}/>
      <div className='game-card__text'>
        <div className='game-card__text-title'>
          {props.title}
        </div>
        <div className='game-card__text-description'>
          {props.description}
        </div>
      </div>
    </div>
  )
}

export default GameCard