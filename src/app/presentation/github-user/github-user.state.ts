import { State, Action, StateContext, Selector } from '@ngxs/store';
import { GetGithubUser } from 'src/app/domain/usecases/get-github-user';
import { catchError, mergeMap, tap } from 'rxjs/operators';

import {
  FetchGithubUser,
  FetchGithubUserFail,
  FetchGithubUserSuccess
} from './github-user.actions';
import { GithubUserStateModel } from './github-user-state.model';
import { Injectable } from '@angular/core';

@State<GithubUserStateModel>({
  name: 'github_user',
  defaults: {
    user: null,
    error: null,
    loading: false
  }
})
@Injectable()
export class GithubUserState {
  constructor(private getGithubUser: GetGithubUser) {}

  @Action(FetchGithubUser)
  fetchGithubUser(
    ctx: StateContext<GithubUserStateModel>,
    { username }: FetchGithubUser
  ) {
    return this.getGithubUser.execute(username).pipe(
      tap(() => {
        ctx.patchState({
          loading: true
        });
      }),
      mergeMap(user => {
        return ctx.dispatch(new FetchGithubUserSuccess(user));
      }),
      catchError(error => {
        return ctx.dispatch(new FetchGithubUserFail(error));
      })
    );
  }

  @Action(FetchGithubUserFail)
  fetchGithubUserFail(
    ctx: StateContext<GithubUserStateModel>,
    { error }: FetchGithubUserFail
  ) {
    ctx.setState({ user: null, loading: false, error });
  }

  @Action(FetchGithubUserSuccess)
  fetchGithubUserSuccess(
    ctx: StateContext<GithubUserStateModel>,
    { user }: FetchGithubUserSuccess
  ) {
    ctx.setState({ user, loading: false, error: null });
  }
}
