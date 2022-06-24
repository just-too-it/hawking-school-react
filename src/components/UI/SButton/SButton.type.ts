export interface IButton {
    type: 'button' | 'submit';
    label: string;
    view?: string;
    icon?: HTMLImageElement | string;
    btnOnClick(): void;
}