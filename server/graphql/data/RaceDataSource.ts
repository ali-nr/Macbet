import { DataSource } from 'apollo-datasource';
import axios from 'axios';
import { HorseModel, IRaceDataSource, RaceModel } from './types';

type RaceSource = {
  data: { race: RaceModel; runners: HorseModel[] };
};

export class RaceDataSource extends DataSource implements IRaceDataSource {
  async getRaces(ids: string[]): Promise<RaceModel[]> {
    const races = Promise.all(ids.map(id => this.getRace(id)));
    return races;
  }
  async getRace(id: string): Promise<RaceModel> {
    const race: { data: RaceSource } = await axios.get(
      `https://api-affiliates.ladbrokes.com.au/affiliates/v1/racing/events/${id}`,
    );
    const raceModel: RaceModel = {
      ...race.data.data.race,
      runners: race.data.data.runners,
    };
    return raceModel;
  }
}
