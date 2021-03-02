import { Service } from 'typedi';
import RedisClient from '@/databases/redis';
import adjectives from '@/service/nickname/adjective';
import nouns from '@/service/nickname/noun';
import { removeDuplicateFromArray, createRandomNumber } from '@/utils';

@Service()
class NicknameService {
  @Inject('nicknameDB') nicknameDB!: RedisClient;
  readonly adjs: string[];
  readonly names: string[];

  public constructor() {
    this.adjs = removeDuplicateFromArray<string>(adjectives);
    this.names = removeDuplicateFromArray<string>(nouns);
  }

  public createNickname() {
    return [this.adjs, this.names].reduce(
      (acc, words) => acc + words[createRandomNumber(words.length)],
      ''
    );
  }

  public checkDuplicateNickanme(nickname: string) {
    /** TODO: 중복 닉네임 검사 */
  }
}

export default NicknameService;
