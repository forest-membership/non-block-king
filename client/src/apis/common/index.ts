import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig } from 'axios';

const requestConfig: AxiosRequestConfig = {
  baseURL: 'http://localhost:3000',
};

class HTTPClient {
  protected readonly instance: AxiosInstance;

  public constructor() {
    this.instance = axios.create(requestConfig);
    this.initInterceptor = this.initInterceptor.bind(this);

    this.initInterceptor();
  }

  private initInterceptor() {
    this.instance.interceptors.response.use(this.onResponse, this.onException);
  }

  private onResponse({ data }: AxiosResponse) {
    return data;
  }

  private onException(err: any) {
    return Promise.reject(err);
  }
}

export default HTTPClient;
