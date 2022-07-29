
interface ISocial {
    name: string;
    link: string;
    icon: string;
}

export interface ISocialBlock {
    title?: string;
    socials: ISocial[];
    placeOfUse?: 'footer' | 'news' | 'contacts' | 'contacts-right' | 'apartments';
}