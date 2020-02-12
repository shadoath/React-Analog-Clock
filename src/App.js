import React, { useState } from 'react';
import { useInterval } from './hooks'
import { ClockBase, Center, SecondHand, MinuteHand, HourHand, CurTime } from './components'

const App = () => {
  const date = new Date();
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [hours, setHours] = useState(0)

  useInterval(() => {
    setSeconds(date.getSeconds())
    setMinutes(date.getMinutes())
    setHours(date.getHours() % 24 || 24)
  }, 1000)

  return(
    <ClockBase>
      <Center />
      <SecondHand fraction={seconds} />
      <MinuteHand fraction={minutes} />
      <HourHand fraction={hours} />
      <CurTime data-hours={hours} data-mins={minutes} data-secs={seconds}>
      {hours}:{minutes}:{seconds}
    </CurTime>
    </ClockBase>

  )
}

export default App;
