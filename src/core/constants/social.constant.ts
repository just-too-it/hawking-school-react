import {ISocialBlock} from '../../components/Social/Social.type';

export const socialGroups: ISocialBlock = {
    title: 'Мы в соцсетях',
    socials: [
        {name: 'instagram', link:'/mock-link', icon: 'instagram-group'},
        {name: 'vk', link:'/mock-link', icon: 'vk-group'},
        {name: 'facebook', link:'/mock-link', icon: 'facebook-group'}
    ]
}

export const socialNews: ISocialBlock = {
    title: 'Поделиться',
    socials: [
        {name: 'vk', link:'/mock-link', icon: 'vk-share'},
        {name: 'facebook', link:'/mock-link', icon: 'facebook-share'},
        {name: 'viber', link:'/mock-link', icon: 'viber-share'},
        {name: 'telegram', link:'/mock-link', icon: 'telegram-share'},
        {name: 'whatsapp', link:'/mock-link', icon: 'whatsapp-share'}
    ],
    placeOfUse: 'news'
}

export const socialApartments: ISocialBlock = {
    title: 'Поделиться',
    socials: [
        {name: 'vk', link:'/mock-link', icon: 'vk-share'},
        {name: 'facebook', link:'/mock-link', icon: 'facebook-share'},
        {name: 'viber', link:'/mock-link', icon: 'viber-share'},
        {name: 'telegram', link:'/mock-link', icon: 'telegram-share'},
        {name: 'whatsapp', link:'/mock-link', icon: 'whatsapp-share'}
    ],
    placeOfUse: 'apartments'
}

export const socialContactsLeft: ISocialBlock = {
    socials: [
        {name: 'viber', link:'/mock-link', icon: 'viber-share'},
        {name: 'telegram', link:'/mock-link', icon: 'telegram-share'},
        {name: 'whatsapp', link:'/mock-link', icon: 'whatsapp-share'}
    ],
    placeOfUse: 'contacts'
}

export const socialContactsRight: ISocialBlock = {
    socials: [
        {name: 'instagram', link:'/mock-link', icon: 'instagram-group'},
        {name: 'vk', link:'/mock-link', icon: 'vk-group'},
        {name: 'facebook', link:'/mock-link', icon: 'facebook-group'}
    ],
    placeOfUse: 'contacts-right'
}