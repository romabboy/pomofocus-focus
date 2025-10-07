import React, { useEffect, useRef } from "react";
import { Button } from "../button";
import nextButtonImg from "../../assets/icon/next_button.png"
import { ButtonVariants } from "../button/types";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { Timer } from "./Timer";
import { useInterval } from "../../hooks/interval"
import {
    PomoIds,
    pomoActions,
    siteColorActions,
    selectPomoIsStart,
    selectPomoId,
    selectColor,
    selectColorsMap

} from "../../store/store";

interface PomoBoardProps {

}

const pomoOptions = [
    { id: PomoIds.POMODORO, title: 'Pomodoro' },
    { id: PomoIds.SHORT_BREAK, title: 'Short Break' },
    { id: PomoIds.LONG_BREAK, title: 'Long Break' },
]

export const PomoBoard: React.FC<PomoBoardProps> = () => {
    const dispatch = useAppDispatch()
    const pomoId = useAppSelector(selectPomoId)
    const siteColor = useAppSelector(selectColor)
    const colorsMap = useAppSelector(selectColorsMap)
    const isStart = useAppSelector(selectPomoIsStart)
    const intervalRef = useInterval()

    const handlerStartButton = () => {
        dispatch(pomoActions.toggle())

        const isIntervalCleared = clearInervalIfExist(intervalRef.current)

        if (isIntervalCleared) intervalRef.current = null
        else intervalRef.current = window.setInterval(() => { dispatch(pomoActions.increseTimeBySecond()) }, 1000)
    }

    const handlerNextButton = () => {
        dispatch(pomoActions.next())
        const isIntervalCleared = clearInervalIfExist(intervalRef.current)
        if (isIntervalCleared) intervalRef.current = null
    }

    useEffect(() => {
        dispatch(pomoActions.resetTime())
        dispatch(pomoActions.pause())
        dispatch(siteColorActions.setColor(colorsMap[pomoId]))
        const isIntervalCleared = clearInervalIfExist(intervalRef.current)
        if (isIntervalCleared) intervalRef.current = null
        

    }, [dispatch, pomoId])

    return (
        <div className="max-w-[480px] mx-auto w-full pt-5 pb-8 flex flex-col items-center bg-white bg-opacity-10 rounded">
            <nav>
                {
                    pomoOptions.map(option =>
                        <Button
                            key={option.id}
                            title={option.title}
                            variant={ButtonVariants.POMO_OPTION}
                            isActive={pomoId == option.id}
                            clickHandler={() => { dispatch(pomoActions.moveToId(option.id)) }}
                        />
                    )
                }
            </nav>
            <Timer />
            <div className="mt-10 relative w-full flex justify-center">
                <Button
                    title={isStart ? "PAUSE" : "START"}
                    titleColor={siteColor}
                    variant={ButtonVariants.START}
                    isActive={isStart}
                    clickHandler={() => handlerStartButton()}
                    
                />
                <Button
                    variant={ButtonVariants.NEXT}
                    icon={nextButtonImg}
                    className="absolute top-1/2 -translate-y-1/3 right-14 z-10 w-6 h-6"
                    isActive={isStart}
                    clickHandler={() => handlerNextButton()}
                />
            </div>
        </div>
    )
}


function clearInervalIfExist(intervalId: number | null): boolean {
    if (intervalId) {
        clearInterval(intervalId)
        return true
    }
    return false
}