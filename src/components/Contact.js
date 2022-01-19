import React from 'react'
import './Contact.css'
import {Link} from 'react-router-dom'

function Contact() {
  return (
    <div className='contact-container'>
      <div class='contact-links'>
        <div className='contact-wrapper'>
          <section className='contact'>
            <h2 className='contact-heading'>OUR BRANCHES</h2>
          </section>
        </div>
      </div>

      <div class='contact-link'>
        <div className='contact-link-wrapper'>
          <div class='contact-link-items'>
            <h2 className='h2-text'>BIRMINGHAM</h2>
            <p1>
              Heath Road, Darlaston, WS10 8XL
              <br></br>
              <br></br>Tel: 0121 568 3700
            </p1>
          </div>
          <div class='contact-link-items'>
            <h2 className='h2-text'>NEWPORT</h2>
            <p1>
              {' '}
              Unit E, Langland Way, Reevesland Park Industrial Estate, Newport,
              NP19 4PT<br></br>
              <br></br>Tel: 01633 636000{' '}
            </p1>
          </div>

          <div class='contact-link-items'>
            <h2 className='h2-text'>LONDON</h2>
            <p1>
              Unit 10, IOG Centre, 59-71 River Road, Barking, IG11 0DR <br></br>
              <br></br>Tel: 020 8477 8333
            </p1>
          </div>

          <div class='contact-link-items'>
            <h2 className='h2-text'>HAYES</h2>
            <p1>
              4F Swallowfield Way, Hayes, Middlesex. UB3 1DQ
              <br></br>
              <br></br>Tel: 020 8754 5500
            </p1>
          </div>

          <div class='contact-link-items'>
            <h2 className='h2-text'>SUNDERLAND</h2>
            <p1>
              Unit 3, Sunrise Enterprise Park, Tyne & Wear. SR5 3RX
              <br></br>
              <br></br>Tel: 0191 511 5454
            </p1>
          </div>
        </div>
      </div>

      <div class='contact-links'>
        <div className='contact-wrapper'>
          <section className='contact'>
            <h2 className='h2-text'>HEAD OFFICE </h2>
            <p className='contact-text'>
              EFG Food & Technology Park Llantarnam Park Way, Cwmbran, NP44 3GA
            </p>
          </section>
        </div>
      </div>

      <div class='contact-links'>
        <div
          className='contact-wrappe
        r'
        >
          <section className='contact'>
            <p className='contact-text'></p>
            <h2 className='h2-text'>COMPANY LINKS </h2>
          </section>
        </div>
      </div>

      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <Link
              onClick={() =>
                (window.location = 'https://www.eurofoodsgroup.co.uk')
              }
            >
              UK site
            </Link>
          </div>
          <div class='footer-link-items'>
            <Link
              onClick={() =>
                (window.location = 'https://www.masalabazaar.com.bd')
              }
            >
              Ecommerce BD
            </Link>
          </div>
          <div class='footer-link-items'>
            <Link
              onClick={() =>
                (window.location =
                  ' https://en.wikipedia.org/wiki/Euro_Foods_(UK)')
              }
            >
              Wikipedia
            </Link>
          </div>
          <div class='footer-link-items'>
            <Link
              onClick={() =>
                (window.location = 'https://www.linkedin.com/company/eurofoods')
              }
            >
              linked In
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
