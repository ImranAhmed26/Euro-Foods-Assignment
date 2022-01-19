import React from 'react'
import './Rivals.css'

function Rivals() {
  return (
    <div className='rivals-container'>
      <div class='rivals-links'>
        <div className='rivals-wrapper'>
          <section className='rivals'>
            <h2 className='rivals-heading'>We compete strongly against</h2>
          </section>
        </div>
      </div>

      <div class='rivals-link'>
        <div className='rivals-link-wrapper'>
          <div class='rivals-link-items'>
            <h2 className='h2-txt'>IBCO</h2>
            <p1></p1>
          </div>
          <div class='rivals-link-items'>
            <h2 className='h2-txt'>Masud Fish</h2>
            <p1></p1>
          </div>

          <div class='rivals-link-items'>
            <h2 className='h2-txt'>PRAN</h2>
            <p1></p1>
          </div>

          <div class='rivals-link-items'>
            <h2 className='h2-txt'>Gemini</h2>
            <p1></p1>
          </div>

          <div class='rivals-link-items'>
            <h2 className='h2-txt'>AG Agro</h2>
            <p1></p1>
          </div>
        </div>
      </div>

      <div class='rivals-links'>
        <div className='rivals-wrapper'>
          <section className='rivals'>
            <p className='rivals-text'>
              We stand out from our competitors because we choose only the best
              quality raw materials and sort them out carefully. Our products
              are free from foreign particles and we maintain highly hygienic
              production floors.
            </p>
            <p className='rivals-text'>
              We are certfied by the <br></br>
              BRC (British Retailer Consortium), USFDA, HACCP, Halal
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Rivals
