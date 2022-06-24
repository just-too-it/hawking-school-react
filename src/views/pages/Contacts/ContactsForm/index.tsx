import React from 'react';

import styles from './ContactsForm.module.scss'
import { SInput } from '../../../../components/UI/SInput';
import { SButton } from '../../../../components/UI/SButton';

const handlerSubmit = () => {
//отменить действие по умолчанию
//очистить поля
//вывести модалку
    console.log('submit')
}
export const ContactsForm = () => {
    return (
        <form action="" method="post" className={styles.form}>
            <fieldset>
                <div className={styles.info}>
                    <SInput type='text' placeholder='Введите имя' iconName='user' label='Ваше имя' name={'user'}/>
                    <SInput type='email' placeholder='Введите почту' iconName='mail' label='Ваша электронная почта' name={'mail'} />
                </div>
                <label className={styles.label}>
                    Ваше сообщение
                    <textarea name={'message'} placeholder='Сообщение' className={styles.textarea}></textarea>
                </label>
                <div className={styles.button}>
                    <SButton type={'submit'} label={'Отправить'} view={'cobalt'} btnOnClick={()=>{handlerSubmit()}}/>
                </div>
            </fieldset>
          
        </form>
    )
}