import React from "react";
import { IButton } from "../UI/SButton/SButton.type";

export type ServiceCardProps = {
    title?: string;
    icon?: React.ReactNode;
    subTitle?: string;
    description?: string;
    btn?: IButton;
    gold?: boolean;
}