import redis from 'redis';
import { Container } from 'typedi';

class RedisClient {
  port: number;
  client: redis.RedisClient;

  constructor() {
    this.port = 6379;
    this.client = redis.createClient(this.port);
  }

  public setValue(key: string, value: string) {
    this.client.set(key, value);
  }

  public async getValue(key: string, cb: redis.Callback<string | null>) {
    this.client.get(key, cb);
  }
}

Container.set('nicknameDB', new RedisClient());
export default RedisClient;
