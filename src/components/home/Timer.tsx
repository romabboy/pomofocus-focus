import React, { FC } from 'react';
import { formatTime } from '../../utils';
import { useAppSelector } from '../../hooks/redux';
import { selectPomoTime } from '../../store/pomoBoard/selectors';

interface TimerProps {
}

export const Timer: FC<TimerProps> = ({ }) => {
    const time = useAppSelector(selectPomoTime)

    return (
        <div className="h-36 mt-5">
            <p className="font-medium text-[120px]">
                {formatTime(time)}
            </p>
        </div>

    );
};
