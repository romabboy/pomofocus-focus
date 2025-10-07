import { RefObject, useEffect, useRef } from "react";

export const useInterval = (): RefObject<null | number> => {
    const intervalRef = useRef<number | null>(null)

    useEffect(() => {
        return () => {

            if (intervalRef.current) {
                clearInterval(intervalRef.current)
                intervalRef.current = null
            }

        }
    }, [])

    return intervalRef
}