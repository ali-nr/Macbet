import { DataSource } from 'apollo-datasource';
import { HorseModel, IHorseDataSource } from './types';

export class HorseDataSource extends DataSource implements IHorseDataSource {
  getHorses(): Promise<HorseModel[]> {
    throw new Error('Method not implemented.');
  }
}
