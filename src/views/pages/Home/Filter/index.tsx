import React from 'react';

import { TabBar } from 'components/TabBar';

import styles from './Filter.module.scss';

export const Filter = () => {
  return (
    <section className={styles.filter}>
      <h1 className={styles.title}>
        Sdaem.by - у нас живут <span>ваши объявления</span>
      </h1>
      <TabBar />
    </section>
  );
};
