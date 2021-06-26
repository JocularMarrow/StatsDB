import { IStatsDB } from './interfaces/stats.db';
import { IConfig } from './interfaces/config';
import { StatsDBClient } from './util/stats.db';
import { IPlayer } from './interfaces/player';
export declare class StatsDB extends StatsDBClient implements IStatsDB {
    constructor(id: string, pass: string);
    config(): Promise<IConfig | Error>;
    search(ign: string, platform?: string, mode?: string): Promise<any>;
    getLeaderBoard(platform?: string): Promise<any>;
    getPlayerById(id: string): Promise<IPlayer | Error>;
    getPlayer(ign: string, platform?: string): Promise<IPlayer | Error>;
}
export default StatsDB;
//# sourceMappingURL=index.d.ts.map