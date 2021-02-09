import 'reflect-metadata';
import { Service } from 'typedi';
import adjectives from '@/service/nickname/adjective';
import nouns from '@/service/nickname/noun';
import { removeDuplicateFromArray, createRandomNumber } from '@/utils';

@Service()
class NicknameService {
  adjs: string[];
  names: string[];

  public constructor() {
    this.adjs = removeDuplicateFromArray<string>(adjectives);
    this.names = removeDuplicateFromArray<string>(nouns);
  }

  public createNickname() {
    const nickname = [this.adjs, this.names].reduce(
      (acc, words) => acc + words[createRandomNumber(words.length)],
      ''
    );

    return nickname;
  }
}

export default NicknameService;
