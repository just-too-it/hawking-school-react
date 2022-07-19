import { Component } from "react";
import { IButton } from "../UI/SButton/SButton.type";

export type ServiceCardProps = {
    title?: string;
    icon?: any;
    subTitle?: string;
    description?: string;
    btn?: IButton;
    gold?: boolean;
}