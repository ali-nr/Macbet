import { Resolvers } from './generated';

export const resolvers: Resolvers = {
  Query: {
    meetings(_, args, { dataSources }) {
      return dataSources.meeting.getMeetings(args.state);
    },
    races(_, args, { dataSources }) {
      return dataSources.race.getRaces(args.ids);
    },
  },
  Meeting: {
    id(meeting) {
      return meeting.meeting;
    },
  },
  Race: {
    id(race) {
      return race.event_id;
    },
    raceNumber(race) {
      return race.race_number;
    },
    horses(race) {
      return race.runners;
    },
  },
};
