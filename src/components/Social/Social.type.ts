/* export interface ISocial {
    name: string;
    link: string;
} */

interface ISocial {
    name: string;
    link: string;
}

export interface ISocialBlock {
    title: string;
    socials: ISocial[];
}