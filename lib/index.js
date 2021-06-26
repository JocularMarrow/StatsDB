"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatsDB = void 0;
const stats_db_1 = require("./util/stats.db");
class StatsDB extends stats_db_1.StatsDBClient {
    constructor(id, pass) {
        super(id, pass);
    }
    config() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client()
                .get('config')
                .then((res) => {
                return res.data;
            })
                .catch((error) => {
                throw new Error(error);
            });
        });
    }
    search(ign, platform = 'pc', mode = 'fast') {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client()
                .get(`${platform}/search/${ign}/${mode}`)
                .then((res) => {
                return res.data;
            })
                .catch((error) => {
                throw new Error(error);
            });
        });
    }
    getLeaderBoard(platform = 'all') {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client()
                .get(`${platform}/leaderboard`)
                .then((res) => {
                return res.data;
            })
                .catch((error) => {
                throw new Error(error);
            });
        });
    }
    getPlayerById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client()
                .get(`player/${id}`)
                .then((res) => {
                return res.data;
            })
                .catch((error) => {
                throw new Error(error);
            });
        });
    }
    getPlayer(ign, platform = 'pc') {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client()
                .get(`${platform}/player/${ign}`)
                .then((res) => {
                return res.data;
            })
                .catch((error) => {
                throw new Error(error);
            });
        });
    }
}
exports.StatsDB = StatsDB;
exports.default = StatsDB;
//# sourceMappingURL=index.js.map