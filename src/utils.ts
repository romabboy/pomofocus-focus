export function formatTime(seconds: number): string {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;

    const formattedMins = mins.toString().padStart(2, '0');
    const formattedSecs = secs.toString().padStart(2, '0');

    return `${formattedMins}:${formattedSecs}`;
}


export function minuteToSeconds(minutes: number, seconds: number = 0){
    return minutes * 60 + seconds
}

export function secondsToMinute(seconds: number){
    return Math.floor(seconds / 60)
}

export function isNumber(value: number): boolean{
    return !isNaN(+value)
}
export function isPositiveNumber(value: number): boolean{
    if(!isNumber(value)) return false
    if(value > 0) return true
    return false
}