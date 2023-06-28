import React, {useState, useEffect} from 'react'
import ConfettiExplision from 'react-confetti-explosion'
import Confetti from 'react-confetti'

const Countdown = ({birthday}) => {
 const [days, setDays] = useState(0)
 const [hours, setHours] = useState(0)
 const [minutes, setMinutes] = useState(0)
 const [seconds, setSeconds] = useState(0)
 const [isBirthday, setIsBirthday] = useState(false)
 const [screen, setScreen] = useState({width: window.innerWidth, height: window.innerHeight})
 const [isExploding, setIsExploding] = useState(false)

 function confettiExplosion(e) {
    e.preventDefault()
    setIsExploding(!isExploding)
 }

 useEffect(() => {
    const timer = setInterval(() => {
      const today = new Date().getTime()
      const timeLeft = birthday - today
      console.log(timeLeft);

      let day = 24*60*60*1000
      let hour = 60*60*1000
      let minute = 60*1000
      let second = 1000
     if(timeLeft > 0) {
      let days = Math.floor(timeLeft / day)
      let hours = Math.floor(timeLeft / hour)
      let minutes = Math.floor((timeLeft % hour) / minute)
      let seconds = Math.floor((timeLeft % minute) / second) 

      setDays(days)
      setHours(hours)
      setMinutes(minutes)
      setSeconds(seconds)
     } else{
        setIsBirthday(true)
     }
    },1000)
    return () => clearInterval(timer)
 },[birthday])

  return (
    <div>
    {isBirthday ?
   
     (<div className='flex flex-col items-center p-4'>
        <Confetti width={screen.width} height={screen.height} numberOfPieces={250}
                  colors={['white','orangered','lightblue','lightgreen','violet','yellow']} />
        <h1 id='happy' className='flex flex-wrap text-4xl m-3'>
            <span className='text-blue-500 text-8xl m-3'>Happy</span>
            <span className='text-yellow-400 text-8xl m-3'> Birthday</span>
            <span className='text-red-500 text-8xl m-3'> Bianca</span> 
            <span className='text-purple-500 text-8xl m-3'>!</span> 
            <span className='text-green-500 text-8xl m-3'>!</span>
            <span className='text-8xl m-3'>!</span>
        </h1>
        <br />
        <button 
          className='bg-orange-300 text-white tracking-widest w-[130px]'
          onClick={confettiExplosion}>Surprise</button>
        {isExploding && <ConfettiExplision />}
        <ConfettiExplision/>
    </div>)
     :
    (<div className='flex items-center'>
        <div className='flex flex-col items-center m-2'>
            <h3>Days</h3>
            <p>{days}</p>
        </div>
        <div className='flex flex-col items-center m-2'>
            <h3>Hours</h3>
            <p>{hours}</p>
        </div>
        <div className='flex flex-col items-center m-2'> 
            <h3>Minutes</h3>
            {minutes < 10 ? <p>0{minutes}</p> : <p>{minutes}</p>}    
        </div>
        <div className='flex flex-col items-center m-2'>
            <h3>Seconds</h3>
            {seconds < 10 ? <p>0{seconds}</p> : <p>{seconds}</p>}
            
        </div>
    </div>)
    }
    
    </div>
  )
}

export default Countdown