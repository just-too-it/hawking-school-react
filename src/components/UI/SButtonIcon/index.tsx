import React, { FC } from 'react'

import styles from './SButtonIcon.module.scss'
import { SButtonIconProps } from './SButtonIcon.types'

export const SButtonIcon:FC<SButtonIconProps> = ({ type='button', btnOnClick, children }) => {
    
  return (
    <button type={type} onClick={btnOnClick} className={styles.button}>
      {children}
    </button>
  )
}
