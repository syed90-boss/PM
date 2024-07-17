import React from 'react'
import linkedin from '../linkedin-brands-solid.svg'
import email from '../envelope-solid.svg'
const Name = () => {
    const handleClick = () => {
        window.location.href = "http://www.linkedin.com/in/syed-ibrahim-38a011243";
    }

    const handleClick2 = () => {
        window.location.href = "mailto:syedmobile198@gmail.com";
    }
  return (
    <div className='name-class'>
        <h2 className='name'>Syed Ibrahim</h2>
        <h3 className='des'>Front end developer</h3>
        <h4 className='web'><a href="https://syed90-boss.github.io/syedgpt/" className='web-anchor'>syed.website</a>
        </h4>
        <button onClick={handleClick2} className='email-bt'><img src={email} 
            style={{width : '20px'}} className='email-img'/>Email</button>
        <button onClick={handleClick} className='linkedin-bt'><img src={linkedin} 
            style={{width : '20px'}} className='linkedin-img'/>LinkedIn</button>
    </div>
  )
}

export default Name
//href="http://www.linkedin.com/in/syed-ibrahim-38a011243"