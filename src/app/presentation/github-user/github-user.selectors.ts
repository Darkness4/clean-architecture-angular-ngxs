import { Selector } from '@ngxs/store';
import { GithubUserStateModel } from './github-user-state.model';
import { GithubUserState } from './github-user.state';

export class GithubUserSelectors {
  @Selector([GithubUserState])
  static getGithubUser(state: GithubUserStateModel) {
    return state.user;
  }

  @Selector([GithubUserState])
  static getError(state: GithubUserStateModel) {
    return state.error;
  }

  @Selector([GithubUserState])
  static getLoading(state: GithubUserStateModel) {
    return state.loading;
  }
}
