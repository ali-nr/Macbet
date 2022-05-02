import {
  IHorseDataSource,
  IMeetingDataSource,
  IRaceDataSource,
} from './data/types';

export type ApolloContext = {
  dataSources: {
    meeting: IMeetingDataSource;
    race: IRaceDataSource;
    horse: IHorseDataSource;
  };
};
