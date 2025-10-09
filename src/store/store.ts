import { configureStore } from "@reduxjs/toolkit";
import { pomoReducer, pomoActions } from "./pomoBoard/slice";
import { siteColorReducer, siteColorActions } from './siteColor/slice'
import { selectPomoId, selectPomoIsStart, selectPomoStep, selectPomoTime, selectPomoSettings} from './pomoBoard/selectors'
import { selectColor, selectColorsMap } from './siteColor/selectors'
import { PomoIds } from "./types";

export const makeStore = () => {
    return configureStore({
        reducer: {
            pomo: pomoReducer,
            siteColor: siteColorReducer
        }
    })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore["getState"]>
export type AppDispatch = AppStore["dispatch"]

export { pomoActions, siteColorActions, PomoIds }
export {
    selectPomoId,
    selectPomoIsStart,
    selectPomoStep,
    selectPomoTime,
    selectColor,
    selectColorsMap,
    selectPomoSettings
}