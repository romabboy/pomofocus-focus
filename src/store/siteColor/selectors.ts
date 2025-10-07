import { RootState } from "../store";
import { createSelector } from "@reduxjs/toolkit";

const selectSiteColorState = (state: RootState) => state.siteColor

export const selectColor = createSelector(
    selectSiteColorState,
    (state) => state.color
)

export const selectColorsMap = createSelector(
    selectSiteColorState,
    (state) => state.colors
)