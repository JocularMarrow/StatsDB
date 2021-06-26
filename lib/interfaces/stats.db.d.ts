import { IConfig } from './config';
import { IPlayer } from './player';
export interface IStatsDB {
    config: () => Promise<IConfig | Error>;
    search: (ign: string, platform?: string, mode?: string) => void;
    getLeaderBoard: (platform?: string) => void;
    getPlayerById: (id: string) => Promise<IPlayer | Error>;
    getPlayer: (ign: string, platform?: string) => Promise<IPlayer | Error>;
}
//# sourceMappingURL=stats.db.d.ts.map