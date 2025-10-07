import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { minuteToSeconds } from "../../utils";
import { PomoIds } from "../types";

interface PomoSetting{
    initialTimes: {
        [PomoIds.POMODORO]: number,
        [PomoIds.SHORT_BREAK]: number,
        [PomoIds.LONG_BREAK]: number,
    };
    initialStep: number;
}

interface PomoState {
    id: PomoIds
    isStart: boolean;
    time: number;
    step: number;
    settings: PomoSetting;
}

const initialState: PomoState = {
    id: PomoIds.POMODORO,
    isStart: false,
    step: 0,
    time: 0,
    settings: {
        initialStep: 3,
        initialTimes: {
            [PomoIds.POMODORO]: minuteToSeconds(25),
            [PomoIds.SHORT_BREAK]: minuteToSeconds(5),
            [PomoIds.LONG_BREAK]: minuteToSeconds(15)
        }
        
    }
}

function NextStepHandler(state: PomoState): PomoState{
    state.isStart = false

    if(state.step == state.settings.initialStep){
        state.id = PomoIds.LONG_BREAK
        state.step = 0
    }else if(PomoIds.POMODORO == state.id){
        state.id = PomoIds.SHORT_BREAK
    }else{
        state.id = PomoIds.POMODORO
        state.step += 1
    }
    

    return state

}

export const pomoSlice = createSlice({
    name: 'pomo_slice',
    initialState,
    reducers: {
        toggle(state) { state.isStart = !state.isStart },
        start(state) {state.isStart = true},
        pause(state) { state.isStart = false },
        moveToId(state, action: PayloadAction<PomoIds>){
            state.id = action.payload
        },
        setStep(state, action: PayloadAction<number>){
            state.step = action.payload
        },
        resetTime(state){state.time = 0},
        increseTimeBySecond(state){
            if(state.time == state.settings.initialTimes[state.id]){
                state.isStart = false
                state.time = 0
                state.step += 1
                state = NextStepHandler(state)
            }else{
                state.time += 1
            }

            return state
        },
        next(state) {
            state.isStart = false
            state = NextStepHandler(state)
            return state
        }
    }
})


export const {reducer: pomoReducer, actions: pomoActions} = pomoSlice