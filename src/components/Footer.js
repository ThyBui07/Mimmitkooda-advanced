import React from 'react'
import logo from '../images/logo_white.png'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://www.columbiaroad.com">
          <img src={logo} alt="Columbia Road" />
        </a>
      </div>
      <div>
        <a href="https://www.columbiaroad.com/careers">Careers</a>
      </div>
      <div>
        <a href="https://www.columbiaroad.com/summer-jobs">Summer Jobs</a>
      </div>
    </footer>
  )
}

export default Footer
