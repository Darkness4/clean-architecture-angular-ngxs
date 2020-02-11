import { Selector } from '@ngxs/store';
import { GithubUserStateModel } from './github-user-state.model';
import { GithubUserState } from './github-user.state';

export class GithubUserSelectors {
  @Selector([GithubUserState])
  static user(state: GithubUserStateModel) {
    return state.user;
  }

  @Selector([GithubUserState])
  static error(state: GithubUserStateModel) {
    return state.error;
  }

  @Selector([GithubUserState])
  static loading(state: GithubUserStateModel) {
    return state.loading;
  }
}
