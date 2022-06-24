import React, { FC, ReactNode, useState } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

import { ISocialBlock } from './Social.type';
import { ReactComponent as VkGroupIcon } from '../../assets/images/icons/vk-group.svg';
import { ReactComponent as InstGroupIcon } from '../../assets/images/icons/insta-group.svg';
import { ReactComponent as FbGroupIcon } from '../../assets/images/icons/fb-group.svg';

import { ReactComponent as VkShareIcon } from '../../assets/images/icons/vk-share.svg';
import { ReactComponent as FbShareIcon } from '../../assets/images/icons/fb-share.svg';
import { ReactComponent as VbShareIcon } from '../../assets/images/icons/viber-share.svg';
import { ReactComponent as TgShareIcon } from '../../assets/images/icons/telegram-share.svg';
import { ReactComponent as WaShareIcon } from '../../assets/images/icons/whatsapp-share.svg';

export const Social: FC<{ socialBlock: ISocialBlock }> = (props) => {
  const { title, socials, placeOfUse } = props.socialBlock;

  const socialClassNames = clsx(
    'social',
    placeOfUse == 'news' && 'social_news',
    placeOfUse == 'contacts' && 'social_contacts',
    placeOfUse == 'contacts-right' && 'social_contacts social_contacts-right'
  );

  const settingIcon = (iconName) => {
    switch (iconName) {
      case 'instagram-group':
        return <InstGroupIcon width={24} height={24} />;
      case 'vk-group':
        return <VkGroupIcon width={24} height={14} />;
      case 'facebook-group':
        return <FbGroupIcon width={20} height={20} />;
      case 'vk-share':
        return <VkShareIcon width={17.07} height={9.96} />;
      case 'facebook-share':
        return <FbShareIcon width={8.54} height={17.07} />;
      case 'viber-share':
        return <VbShareIcon width={16.53} height={17.42} />;
      case 'telegram-share':
        return <TgShareIcon width={16.53} height={13.86} />;
      case 'whatsapp-share':
        return <WaShareIcon width={16.72} height={16.8} />;
      default:
        break;
    }
  };

  return (
    <article className={socialClassNames}>
      <div className="social__title">{title}</div>
      <ul className={'social__list'}>
        {socials.map((social) => (
          <li className="social__item" key={social.name}>
            <Link
              to={social.link}
              title={social.name}
              className={`social__link social__link_${social.name}`}
              target="_blank"
            >
              {settingIcon(social.icon)}
            </Link>
          </li>
        ))}
      </ul>
    </article>
  );
};
