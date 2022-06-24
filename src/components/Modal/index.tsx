import React, {FC, useState} from 'react';
import { SButton } from '../UI/SButton';
import styles from './Modal.module.scss'

export const Modal:FC<{isActive: boolean, children, action: string}> = ({isActive, children, action}) => {
    const [active, setActive] = useState(isActive);

    return (
        <section className={active? styles.modal : styles.modal_close}>
            <div className={styles.content}>
                {children}
            <SButton type={'button'} label={`${action}`} btnOnClick={()=>{setActive(false)}} view={'yellow'} />
            </div>
        </section>
    )
}