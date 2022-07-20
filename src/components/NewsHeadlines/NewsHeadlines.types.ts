import { INewsPreview } from '../NewsPreview/NewsPreview.types';

export type NewsHeadlinesProps = {
  data: INewsPreview[];
  newsPerPage: number;
};
