import HTTPClient from './common';

interface INicknameResponse {
  message: string;
  data: { nickname: string };
}

class AuthAPI extends HTTPClient {
  public constructor() {
    super();
    this.getNickname = this.getNickname.bind(this);
  }

  public getNickname() {
    return this.instance.get<INicknameResponse>('/nickname');
  }
}

const authAPI = new AuthAPI();
export default authAPI;
