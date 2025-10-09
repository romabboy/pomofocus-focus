import * as React from "react"
import { useAppSelector } from "../../hooks/redux"
import { PomoIds, selectColor, selectPomoSettings, selectPomoTime } from "../../store/store"
import { Progress } from "../UI/Progress"

interface ProgressTimerProps{
  pomoId: PomoIds
  className?: string;
}

const ProgressTimer: React.FC<ProgressTimerProps> = ({pomoId, className}) => {
  const pomoSettings = useAppSelector(selectPomoSettings)
  const time = useAppSelector(selectPomoTime)
  
  const progress = (time / pomoSettings.initialTimes[pomoId]) * 100
  return (
    <div className={className}>
      <Progress value={progress}/>
    </div>
  )
}

export { ProgressTimer }
