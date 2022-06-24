import React, { useState, useEffect } from 'react';
import { Social } from '../../../components/Social';
import { socialContactsLeft, socialContactsRight, socialGroups } from '../../../core/constants/social.constant';
import styles from './Contacts.module.scss';
import { CONTACT } from '../../../core/constants/contacts.constant';
import { IContacts } from './Contacts.types';
import { Link } from 'react-router-dom';
import { ReactComponent as MapIcon } from '../../../assets/images/icons/map.svg';
import { ReactComponent as PhoneIcon } from '../../../assets/images/icons/phone.svg';
import { ReactComponent as MailIcon } from '../../../assets/images/icons/mail.svg';
import { ReactComponent as ClockIcon } from '../../../assets/images/icons/clock.svg';
import { SInput } from '../../../components/UI/SInput';
import { ContactsForm } from './ContactsForm';
import { Modal } from '../../../components/Modal';

export const Contacts = () => {
  const [contact, setContact] = useState({} as IContacts);

  useEffect(() => {
    setContact(CONTACT);
  }, []);

  return (
    <main className={styles.contacts}>
      <div className={`container ${styles.container}`}>
        <section className={styles.info}>
          <h1 className={styles.title}>Контакты</h1>
          <p className={styles.description}>
            Если у Вас есть пожелания, предложения или претензии по организации работы сайта мы всегда рады услышать
            Ваше мнение.
          </p>
          <address className={styles.address}>
            <div className={styles.item}>
              <div className={styles.icon}>
                <MapIcon width={12.09} height={15} />
              </div>
              {contact.address}
            </div>
            <div className={styles.item}>
              <div className={`${styles.icon} ${styles.icon_phone}`}>
                <PhoneIcon width={8.86} height={15} />
              </div>
              <a href={`tel: ${contact.phone}`}>{contact.phone}</a>
              <Social socialBlock={socialContactsLeft} />
            </div>
            <div className={styles.item}>
              <div className={styles.icon}>
                <MailIcon width={15} height={11.79} />
              </div>
              <a href={`mailto: ${contact.email}`}>{contact.email}</a>
            </div>
            <div className={styles.item}>
              <div className={styles.icon}>
                <ClockIcon width={15} height={15} />
              </div>
              <div dangerouslySetInnerHTML={{ __html: contact.workingRegime }}></div>
            </div>
            <div className={styles.company}>{contact.company}</div>
            <div className={styles.license}>{contact.license}</div>
          </address>
          <article className={styles.notice}>
            Администрация сайта не владеет информацией о наличии свободных квартир
          </article>
        </section>
        <ContactsForm />
        <Social socialBlock={socialContactsRight} />
      </div>
      <Modal isActive={true} action={'Закрыть окно'}>
        <div className={styles.modal}>
          <h1 className={styles.modalTitle}>Ваше письмо отправлено!</h1>
          <p className={styles.modalDescription}>Какое-то сообщение о том, что письмо отправлено, какое-то сообщение, что письмо отправлено.</p>
        </div>
      </Modal>
    </main>
  );
};
