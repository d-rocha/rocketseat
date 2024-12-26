import { useContext, useEffect, useState } from "react";
import { differenceInSeconds } from 'date-fns';

import { TasksContext } from "../Task/NewTask";

import { Button } from "../Button";

import { 
  CountdownContainer,
  TimerWrapper,
  Timer,
  SplitTimer } from "./styles";

export function Countdown() {
  const {
    taskItemActive,
    startDate,
    minutesAmount,
    finishedTimeValidate
  } = useContext(TasksContext);

  const [secondsPassed, setSecondsPassed] = useState(0);

  const secondsCurrent = taskItemActive ? minutesAmount - secondsPassed : 0;

  const minutes = Math.floor(secondsCurrent / 60);
  const seconds = secondsCurrent % 60;

  const minutesRender = String(minutes).padStart(2, '0');
  const secondsRender = String(seconds).padStart(2, '0');

  useEffect(() => {
    let interval: number;

    setSecondsPassed(0);

    if(taskItemActive && startDate !== undefined) {
      interval = setInterval(() => {
        const secondsDiff = differenceInSeconds(
          new Date(),
          startDate
        )

        if(secondsDiff >= minutesAmount) {
          finishedTimeValidate();
        } else {
          setSecondsPassed(secondsDiff);
        }
        
      }, 1000)
    }

    return () => { clearInterval(interval); }

  }, [taskItemActive, startDate, minutesAmount, finishedTimeValidate])

  useEffect(() => {
    if (!taskItemActive) document.title = 'Ignite Timer';
    if(taskItemActive) document.title = `${minutesRender}:${secondsRender}`;

    if(parseInt(minutesRender) === 0 && parseInt(secondsRender) === 0) {
      setSecondsPassed(0)
    }

  }, [taskItemActive, minutesRender, secondsRender])

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
    
      <Button />
    </CountdownContainer>
  )
}