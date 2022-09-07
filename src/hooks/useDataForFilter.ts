import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { CheckboxProps } from 'components/UI/SCheckbox/SCheckbox.types';
import { SelectorProps } from 'components/UI/SSelector/SSelector.types';

type DataForFilterProps = {
  citiesList: SelectorProps[];
  roomsList: SelectorProps[];
  peopleList: SelectorProps[];
  districtsMinskList: SelectorProps[];
  metroMinskList: SelectorProps[];
  optionsList: CheckboxProps[];
  sortList: SelectorProps[];
};

export const useDataForFilter = () => {
  const [data, setData] = useState<DataForFilterProps>(null);

  const fetchDataForFilter = async () => {
    try {
      const response = await axios.get<DataForFilterProps>('/mock-data-for-filter');
      setData({
        ...data,
        citiesList: response.data.citiesList,
        roomsList: response.data.roomsList,
        peopleList: response.data.peopleList,
        districtsMinskList: response.data.districtsMinskList,
        metroMinskList: response.data.metroMinskList,
        optionsList: response.data.optionsList,
        sortList: response.data.sortList,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDataForFilter();
  }, []);

  return { data };
};
