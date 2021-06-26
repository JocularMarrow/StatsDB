import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export class StatsDBClient {
  private user: string;
  private password: string;
  private credentials: Object;

  constructor(userID: string, password: string) {
    this.user = userID;
    this.password = password;
    this.credentials = {
      credentials: 'include',
      headers: {
        Authorization:
          'Basic ' +
          Buffer.from(this.user + ':' + this.password).toString('base64')
      }
    };
  }

  client(): AxiosInstance {
    const config: AxiosRequestConfig = {
      baseURL: 'https://api.statsdb.net/r6/',
      headers: this.credentials
    };
    return axios.create(config);
  }
}
