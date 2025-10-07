import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PomoIds, SiteColor } from "../types";

type PomoColorMap = Record<PomoIds, SiteColor>

interface SiteColorState{
    color: SiteColor,
    colors: PomoColorMap
}

const initialState: SiteColorState = {
    color: SiteColor.RED,
    colors: {
        [PomoIds.POMODORO]: SiteColor.RED,
        [PomoIds.SHORT_BREAK]: SiteColor.BLUE,
        [PomoIds.LONG_BREAK]: SiteColor.GREEN
    }
}

export const siteColorSlice = createSlice({
    name: 'siteColor',
    initialState,
    reducers: {
        setColor(state, action: PayloadAction<SiteColor>){
            state.color = action.payload
        }
    }
})


export const {reducer: siteColorReducer, actions: siteColorActions} = siteColorSlice