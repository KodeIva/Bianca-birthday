import React, {useState, useEffect} from 'react'

const Countdown = ({birthday}) => {
 const [days, setDays] = useState(0)
 const [hours, setHours] = useState(0)
 const [minutes, setMinutes] = useState(0)
 const [seconds, setSeconds] = useState(0)

 useEffect(() => {
    const timer = setInterval(() => {
      const today = new Date().getTime()
      const timeLeft = birthday - today
      console.log(timeLeft);

      let day = 24*60*60*1000
      let hour = 60*60*1000
      let minute = 60*1000
      let second = 1000

      let days = Math.floor(timeLeft / day)
      let hours = Math.floor(timeLeft / hour)
      let minutes = Math.floor((timeLeft % hour) / minute)
      let seconds = Math.floor((timeLeft % minute) / second) 

      setDays(days)
      setHours(hours)
      setMinutes(minutes)
      setSeconds(seconds)
    },1000)
    return () => clearInterval(timer)
 },[birthday])

  return (
    <div className='flex items-center'>
        <div className='flex flex-col items-center'>
            <h3>Days</h3>
            <p>{days}</p>
        </div>
        <div className='flex flex-col items-center'>
            <h3>Hours</h3>
            <p>{hours}</p>
        </div>
        <div className='flex flex-col items-center'> 
            <h3>Minutes</h3>
            <p>{minutes}</p>
        </div>
        <div className='flex flex-col items-center'>
            <h3>Seconds</h3>
            <p>{seconds}</p>
        </div>
    </div>
  )
}

export default Countdown