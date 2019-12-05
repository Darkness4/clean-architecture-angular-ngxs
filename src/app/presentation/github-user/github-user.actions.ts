import { GithubUserEntity } from 'src/app/domain/entities/github-user.entity';

export class FetchGithubUser {
  static readonly type = '[Github User] Fetch';
  constructor(public username: string) {}
}

export class FetchGithubUserSuccess {
  static readonly type = '[Github User] Fetch Success';
  constructor(public user: GithubUserEntity) {}
}

export class FetchGithubUserFail {
  static readonly type = '[Github User] Fetch Fail';
  constructor(public error: any) {}
}
