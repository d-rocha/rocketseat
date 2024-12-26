import { useEffect, useState } from "react";
import { differenceInSeconds } from 'date-fns';

import { Button } from "../Button";

import { 
  CountdownContainer,
  TimerWrapper,
  Timer,
  SplitTimer } from "./styles";

interface Props {
  isTaskActive: boolean,
  startDate: Date | undefined,
  minutesAmount: number,
  isSubmitDisabled: boolean,
  handleEvent?: () => void,
  finishTimeEvent: () => void
}

export function Countdown({ 
  isTaskActive,
  startDate,
  minutesAmount,
  isSubmitDisabled,
  handleEvent,
  finishTimeEvent 
}: Props) {
  const [secondsPassed, setSecondsPassed] = useState(0);

  const secondsCurrent = isTaskActive ? minutesAmount - secondsPassed : 0;

  const minutes = Math.floor(secondsCurrent / 60);
  const seconds = secondsCurrent % 60;

  const minutesRender = String(minutes).padStart(2, '0');
  const secondsRender = String(seconds).padStart(2, '0');

  useEffect(() => {
    let interval: number;

    setSecondsPassed(0);

    if(isTaskActive && startDate !== undefined) {
      interval = setInterval(() => {
        const secondsDiff = differenceInSeconds(
          new Date(),
          startDate
        )

        if(secondsDiff >= minutesAmount) {
          finishTimeEvent();
        } else {
          setSecondsPassed(secondsDiff);
        }
        
      }, 1000)
    }

    return () => { clearInterval(interval); }

  }, [isTaskActive, startDate, minutesAmount, finishTimeEvent])

  useEffect(() => {
    if (!isTaskActive) document.title = 'Ignite Timer';
    if(isTaskActive) document.title = `${minutesRender}:${secondsRender}`;

    if(parseInt(minutesRender) === 0 && parseInt(secondsRender) === 0) {
      setSecondsPassed(0)
    }

  }, [isTaskActive, minutesRender, secondsRender])

  return (
    <CountdownContainer>
      <TimerWrapper>
        <Timer>
          <span>{minutesRender[0]}</span>
          <span>{minutesRender[1]}</span>
        </Timer>
        <SplitTimer>:</SplitTimer>
        <Timer>
          <span>{secondsRender[0]}</span>
          <span>{secondsRender[1]}</span>
        </Timer>
      </TimerWrapper>
    
      <Button 
        isDisabled={isSubmitDisabled} 
        state={isTaskActive}
        clickEvent={handleEvent}
      />
    </CountdownContainer>
  )
}