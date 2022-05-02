import { DataSources } from 'apollo-server-core/dist/graphqlOptions';
import { ApolloContext } from '../apolloContext';
import { HorseDataSource } from './HorseDataSource';
import { MeetingDataSource } from './MeetingDataSource';
import { RaceDataSource } from './RaceDataSource';

export const dataSources: () => DataSources<ApolloContext> = () => ({
  meeting: new MeetingDataSource(),
  race: new RaceDataSource(),
  horse: new HorseDataSource(),
});
