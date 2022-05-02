import { DataSource } from 'apollo-datasource';
import axios from 'axios';
import { State } from '../generated';
import { IMeetingDataSource, MeetingModel } from './types';

type MeetingSource = {
  data: { meetings: MeetingModel[] };
};

export class MeetingDataSource
  extends DataSource
  implements IMeetingDataSource
{
  async getMeetings(state: State): Promise<MeetingModel[]> {
    const meeting: { data: MeetingSource } = await axios.get(
      'https://api-affiliates.ladbrokes.com.au/affiliates/v1/racing/meetings?country=AUS&limit=200',
    );
    console.log(meeting.data.data.meetings);

    return meeting.data.data.meetings.filter(
      meeting => meeting.state === state,
    );
  }
}
