export interface IButton {
    type: 'button' | 'submit';
    label: string;
    color?: string;
    icon?: HTMLImageElement | string;
    btnOnClick(): void;
}