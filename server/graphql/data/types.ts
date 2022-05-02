import { State } from '../generated';

export type MeetingModel = {
  meeting: string;
  name: string;
  date: string;
  country: string;
  state: State;
  races: RaceModel[];
};

export type RaceModel = {
  event_id: string;
  meeting: MeetingModel;
  status: string;
  race_number: number;
  start_time: string;
  country: string;
  state: State;
  runners: HorseModel[];
};

export type HorseModel = {
  name: string;
  jockey: string;
  trainer: string;
  odds: HorseOddsModel;
};

export type HorseOddsModel = {
  fixed_win: number;
  fixed_place: number;
};

export interface IMeetingDataSource {
  getMeetings(state: State): Promise<MeetingModel[]>;
}

export interface IRaceDataSource {
  getRaces(ids: string[]): Promise<RaceModel[]>;
  getRace(id: string): Promise<RaceModel>;
}

export interface IHorseDataSource {
  getHorses(): Promise<HorseModel[]>;
}
