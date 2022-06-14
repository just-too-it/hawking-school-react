import React from 'react';
import { Breadcrumbs } from '../../../components/Breadcrumbs';
import { breadcrumbsForNews } from '../../../core/mockData/mockData';


export const News = () => {

  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbsForNews}/>
    </>
  )
}
