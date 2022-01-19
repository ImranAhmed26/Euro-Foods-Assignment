import React from 'react'
import './Footer.css'
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-sub'>
        <p className='footer-sub-text'>
          Euro Foods Group is a leading international manufacturer and
          distributor of frozen and fresh foods, serving the restaurant,
          catering and <br></br>specialist supermarket sectors.
        </p>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/History'>Our History</Link>
            <Link to='/Our Team'>Our Team</Link>
            <Link to='/Our Mission & Vision'>Our Mission & Vision</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/Our Locations'>Our Locations</Link>
            <Link to='/Email'>Email</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Our Brands</h2>
            <Link to='/Zoy'>Zoy</Link>
            <Link to='/Crown Farms'>Crown Farms</Link>
            <Link to='/Masala'>Masala</Link>
            <Link to='/Al-Rohim'>Al-Rohim</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Career</h2>
            <Link to='/Career'>Join Us</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              <img src='/logofooter.png' alt='logo' />
            </Link>
          </div>
          <small class='website-rights'>Euro Foods Group © 2022</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              onClick={() =>
                (window.location = ' https://www.facebook.com/eurofoodsgroup/')
              }
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              onClick={() =>
                (window.location =
                  'https://www.instagram.com/eurofooduk/?hl=en')
              }
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link twitter'
              onClick={() =>
                (window.location = 'https://twitter.com/eurofoodsgroup')
              }
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              onClick={() =>
                (window.location =
                  'https://www.linkedin.com/company/eurofoods ')
              }
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
      <section>
        <small class='website-rights footer-sub-end'>
          Head Office: Euro Foods Group EFG Food & Technology Park Llantarnam
          Park Way Cwmbran Torfaen NP44 3GA.
        </small>
      </section>
    </div>
  )
}

export default Footer
