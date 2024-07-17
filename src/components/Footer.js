import React from 'react'
import linkedin from '../linkedin-brands-solid.svg'
import github from '../github-brands-solid.svg'
import website from '../globe-solid.svg'


const Footer = () => {
  return (
    <div className='footer-class'>
        <ul className='footer-li'>
            <li><a href="http://www.linkedin.com/in/syed-ibrahim-38a011243" target="_blank"><img src={linkedin} 
            style={{width : '20px'}}/></a></li>

            <li><a href="https://github.com/syed90-boss/syedgpt" target="_blank"><img src={github} 
            style={{width : '20px'}}/></a></li>

            <li><a href="http://syed90-boss.github.io/syedgpt/" target="_blank"><img src={website}
            style={{width : '20px'}} /></a></li>
        </ul>
    </div>
  )
}

export default Footer