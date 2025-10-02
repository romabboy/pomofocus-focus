import React from 'react';

interface WrapperContainerProps{
    children: React.ReactElement
}

export const WrapperContainer: React.FC<WrapperContainerProps> = ({children}) => {
    return (
        <div className='max-w-[620px] w-full mx-auto px-3'>
            {children}
        </div>
    )
}