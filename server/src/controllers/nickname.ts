import express from "express";
import generateNickname from "@/service/nickname";

class Nickname {
    constructor() {}

    static async createOnenickname(req: express.Request, res: express.Response, next: express.NextFunction) {
        // TODO : 이미 생성된 이름과 비교하는 로직 필요
        res.status(200).send({
            message: "랜덤 닉네임 1개를 생성하였습니다.",
            data: {
                nickname: generateNickname(),
            },
        });
    }
}

export default Nickname;
