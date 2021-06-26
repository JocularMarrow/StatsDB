"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatsDBClient = void 0;
const axios_1 = __importDefault(require("axios"));
class StatsDBClient {
    constructor(userID, password) {
        this.user = userID;
        this.password = password;
        this.credentials = {
            credentials: 'include',
            headers: {
                Authorization: 'Basic ' +
                    Buffer.from(this.user + ':' + this.password).toString('base64')
            }
        };
    }
    client() {
        const config = {
            baseURL: 'https://api.statsdb.net/r6/',
            headers: this.credentials
        };
        return axios_1.default.create(config);
    }
}
exports.StatsDBClient = StatsDBClient;
//# sourceMappingURL=index.js.map