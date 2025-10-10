import React from "react";
import { Modal } from "../UI/Modal";
import clsx from "clsx";
import { Input } from "../forms/input/Input";
import { InputVariants } from "../forms/input/types";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { pomoActions, PomoIds, selectPomoSettings } from "../../store/store";
import { isPositiveNumber, minuteToSeconds, secondsToMinute } from "../../utils";
import { Select } from "../select/Select";
import { SelectType } from "../select/types";

interface SettingsModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose }) => {
    const disptach = useAppDispatch()
    const pomoSettings = useAppSelector(selectPomoSettings)

    const handleTimeSetting = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = +e.currentTarget.value
        const pomoId = e.currentTarget.dataset.setPomoid as PomoIds;

        if (!isPositiveNumber(value)) return
        disptach(pomoActions.setInitialTime({ pomoId, time: minuteToSeconds(value) }))
    }

    const handleTimeInterval = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = +e.currentTarget.value

        if (!isPositiveNumber(value)) return
        disptach(pomoActions.setInitialStep(value))
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose} className="font-semibold">
            <div className={clsx(
                "relative px-4 py-6 text-gray-500  flex items-center justify-center",
                "border-b border-gray-200"
            )}>
                SETTING
                <span className="absolute top-1/2 right-5 -translate-y-1/2">
                    X
                </span>
            </div>
            <div className="px-5">
                <div className="text-gray-500 mt-7 mb-2.5">
                    TIMER
                </div>
                <div className="flex flex-col gap-3">
                    <div>
                        <div>{"Time (mintes)"}</div>
                        <div className="flex justify-between gap-3 *:max-w-24">
                            {([PomoIds.POMODORO, PomoIds.SHORT_BREAK, PomoIds.LONG_BREAK] as PomoIds[]).map(
                                (id) => (
                                    <Input
                                        key={id}
                                        data-set-pomoid={id}
                                        variant={InputVariants.NUMBER}
                                        label={id === PomoIds.POMODORO ? "Pomodoro" : id === PomoIds.SHORT_BREAK ? "Short Break" : "Long Break"}
                                        type="number"
                                        value={secondsToMinute(pomoSettings.initialTimes[id])}
                                        onChange={handleTimeSetting}
                                    />
                                )
                            )}
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div>Long Break interval</div>
                        <Input
                            variant={InputVariants.NUMBER}
                            value={pomoSettings.initialStep}
                            type="number"
                            onChange={handleTimeInterval}
                            className="max-w-24"
                        />
                    </div>
                    <div className="flex justify-between items-center">
                        <div>Color theme</div>
                        <Select
                            options={
                                [
                                    {id: 1, value: '1saf'},
                                    {id: 2, value: '2saf'},
                                    {id: 3, value: '3saf'},
                                    {id: 4, value: 's4af'},
                                ]
                            }
                             type={SelectType.TEXT} className="max-w-24" 
                             />
                    </div>
                </div>
            </div>
        </Modal>
    );
};
