export interface IButton {
    type?: 'button' | 'submit' | 'reset';
    label: string;
    view?: string;
    icon?: HTMLImageElement | string;
    width?: string;
    disabled?: boolean;
    btnOnClick?: () => void | any;
}