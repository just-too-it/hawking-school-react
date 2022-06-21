import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { ISocialBlock } from './Social.type';

export const Social: FC<{ socialBlock: ISocialBlock }> = (props) => {
  const { title, socials, share } = props.socialBlock;

  const socialClassName = share ? "social social_share" : "social";

  return (
    <article className={socialClassName}>
      <div className="social__title">{title}</div>
      <ul className={'social__list'}>
        {socials.map((social) => (
          <li className="social__item" key={social.name}>
            <Link
              to={social.link}
              title={social.name}
              className={`social__link social__link_${social.name}`}
              target="_blank"
            ></Link>
          </li>
        ))}
      </ul>
    </article>
  );
};
