export interface IButton {
    type: 'button' | 'submit';
    label: string;
    view?: string;
    icon?: HTMLImageElement | string;
    width?: string;
    btnOnClick(): void;
}