import React from 'react'
import './Cards.css'
import CardItem from './CardItem'

function Cards() {
  return (
    <div className='cards'>
      <h1>Products We offer</h1>
      <h3>
        We offer a vast range of wholesale products suitable for restaurants,
        caterers and specialist supermarkets.<br></br> We are proud to deliver
        products that are of a high standard and always safe for consumption.
      </h3>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem src='images/01.jpg' text='Meat and Poulty' />
            <CardItem src='images/02.jpg' text='Fish & Seafood' />
            <CardItem src='images/03.jpg' text='Dairy Products' />
            <CardItem src='images/04.jpg' text='Fruits & Vegetables' />
          </ul>
          <ul className='cards__items'>
            <CardItem src='images/05.jpg' text='Herbs & Spices' />
            <CardItem src='images/06.jpg' text='Oil, Fat & Ghee' />
            <CardItem src='images/07.jpg' text='Drinks' />
            <CardItem src='images/08.jpg' text='Packaging' />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
