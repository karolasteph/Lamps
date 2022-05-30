import React, { useState } from 'react'
import LampGlobal from './LampGlobal'

const BotonLampGlobal = () => {
    const [isOnGlobal, setIsOnGlobal] = useState('On')
    const switchLightGlobal= ()=>{
        if(isOnGlobal==='Off')
        {setIsOnGlobal('On')}
        else
        {setIsOnGlobal('Off')}
    }

  return (
    <div className='globalbotonlamp'>
        <LampGlobal isOn={isOnGlobal} switchLightGlobal={switchLightGlobal}/>
        <LampGlobal isOn={isOnGlobal} switchLightGlobal={switchLightGlobal}/>
        <LampGlobal isOn={isOnGlobal} switchLightGlobal={switchLightGlobal}/>
    </div>
  )
}

export default BotonLampGlobal