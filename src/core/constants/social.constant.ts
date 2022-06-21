import {ISocialBlock} from '../../components/Social/Social.type';

/* export const socialGroups: ISocial[] = [
    {name: 'instagram', link:'/mock-link'},
    {name: 'vk', link:'/mock-link'},
    {name: 'facebook', link:'/mock-link'},
] */

/* export const socialShare: ISocial[] = [
    {name: 'vk', link:'/mock-link'},
    {name: 'facebook', link:'/mock-link'},
    {name: 'whatsapp', link:'/mock-link'},
    {name: 'telegram', link:'/mock-link'},
    {name: 'viber', link:'/mock-link'},
] */

export const socialGroups: ISocialBlock = {
    title: 'Мы в соцсетях',
    socials: [
        {name: 'instagram', link:'/mock-link'},
        {name: 'vk', link:'/mock-link'},
        {name: 'facebook', link:'/mock-link'}
    ]
}

export const socialShare: ISocialBlock = {
    title: 'Поделиться',
    socials: [
        {name: 'vk', link:'/mock-link'},
        {name: 'facebook', link:'/mock-link'},
        {name: 'viber', link:'/mock-link'},
        {name: 'telegram', link:'/mock-link'},
        {name: 'whatsapp', link:'/mock-link'}
    ],
    share: true
}
