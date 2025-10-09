import { RootState } from "../store";
import { createSelector } from "@reduxjs/toolkit";

const selectPomoState = (state: RootState) => state.pomo

export const selectPomoTime = createSelector(
    selectPomoState,
    (state) => (state.settings.initialTimes[state.id] - state.time)
)

export const selectPomoIsStart = createSelector(
    selectPomoState,
    (state) => state.isStart
)

export const selectPomoStep = createSelector(
    selectPomoState,
    (state) => state.step
)

export const selectPomoId = createSelector(
    selectPomoState,
    (state) => state.id
)

export const selectPomoSettings = createSelector(
    selectPomoState,
    (state) => state.settings
)
