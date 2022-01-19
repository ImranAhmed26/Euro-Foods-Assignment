import React from 'react'
import './Info.css'

function Info() {
  return (
    <div className='info-container'>
      <div class='info-links'>
        <div className='info-wrapper'>
          <section className='info'>
            <h2 className='info-heading'>
              A proud history of service and quality
            </h2>
            <p className='info-text'>
              Euro Foods Group is a leading international manufacturer and
              distributor of frozen and fresh foods, serving the restaurant,
              catering and specialist supermarket sectors..
            </p>
            <p className='info-text'>
              Established in 1991, the company began the journey by supplying
              the Indian restaurants and takeaways in Wales and the West
              Country. With hard work and determination the business then
              developed rapidly, and the supply chain became national.
            </p>
          </section>
        </div>
      </div>

      <div class='info-link'>
        <div className='info-link-wrapper'>
          <div class='info-link-items'>
            <h2 className='h2-text'>Quality</h2>
            <p1>
              {' '}
              As the UK’s largest supplier of the Asian food market, we have a
              passion for the delivery of high quality produce.
            </p1>
          </div>
          <div class='info-link-items'>
            <h2 className='h2-text'>Innovation</h2>
            <p1>
              {' '}
              We lead the industry with innovation in products and services to
              ensure ongoing, loyal customer relationships .
            </p1>
          </div>
        </div>
        <div className='info-link-wrapper'>
          <div class='info-link-items'>
            <h2 className='h2-text'>Commitment</h2>
            <p1>
              {' '}
              We promise to fulfil our customer’s needs and engage with their
              views to help improve our services for everyone.
            </p1>
          </div>
          <div class='info-link-items'>
            <h2 className='h2-text'>Reliability</h2>
            <p1>
              {' '}
              Euro Foods Group is a leading international manufacturer and
              distributor of frozen and fresh foods, serving the restaurant,
              catering and specialist supermarket sectors..
            </p1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info
