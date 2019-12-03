export class FetchGithubUser {
  static readonly type = '[Github User] Fetch';
  constructor(public username: string) {}
}
