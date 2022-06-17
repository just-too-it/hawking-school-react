export interface IButton {
    type: 'button' | 'submit';
    label: string;
    btnOnClick(): void;
    icon?: HTMLImageElement | string;
}