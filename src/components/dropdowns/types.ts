export enum DropDownType{
    COLOR = 'color',
    TEXT = 'text'
}

export interface DropDownProps{
    isOpen: boolean,
    options: {id: string | number, value: string}[],
    changeValue: (value: string) => void
}
