import React, {useState} from 'react'

const Lampara = () => {
    const [isOn, setIsON] = useState('On');
    console.log(isOn)
    const switchLight = () => {
      if (isOn === 'On')
      {setIsON('Off')}
      else
      {setIsON('On')}
  
    }
    return (
      
      <div className='lamp-and-btn'>
         <div className={`lamp ${isOn}`}></div>
         
         <button className='btn' onClick={switchLight}>{isOn}
         </button>
  
      </div>
    )
}

export default Lampara