import { IStatsDB } from './interfaces/stats.db';
import { IConfig } from './interfaces/config';
import { StatsDBClient } from './util/stats.db';
import { IPlayer } from './interfaces/player';

export class StatsDB extends StatsDBClient implements IStatsDB {
  constructor(id: string, pass: string) {
    super(id, pass);
  }

  async config(): Promise<IConfig | Error> {
    return await this.client()
      .get('config')
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
  }

  async search(ign: string, platform: string = 'pc', mode: string = 'fast') {
    return await this.client()
      .get(`${platform}/search/${ign}/${mode}`)
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
  }

  async getLeaderBoard(platform: string = 'all') {
    return await this.client()
      .get(`${platform}/leaderboard`)
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
  }

  async getPlayerById(id: string): Promise<IPlayer | Error> {
    return await this.client()
      .get(`player/${id}`)
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
  }

  async getPlayer(
    ign: string,
    platform: string = 'pc'
  ): Promise<IPlayer | Error> {
    return await this.client()
      .get(`${platform}/player/${ign}`)
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
  }
}

export default StatsDB;
