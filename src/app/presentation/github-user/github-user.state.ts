import { State, Action, StateContext, Selector } from '@ngxs/store';
import { GithubUserEntity } from 'src/app/domain/entities/github-user.entity';
import { GetGithubUser } from 'src/app/domain/usecases/get-github-user';
import { tap, catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { FetchGithubUser } from './github-user.actions';

export interface GithubUserStateModel {
  user: GithubUserEntity;
}

@State<GithubUserStateModel>({
  name: 'github_user',
  defaults: {
    user: null
  }
})
export class GithubUserState {
  constructor(private getGithubUser: GetGithubUser) {}

  @Selector()
  static getGithubUser(state: GithubUserStateModel) {
    return state.user;
  }

  @Action(FetchGithubUser)
  fetchGithubUser(
    { getState, setState }: StateContext<GithubUserStateModel>,
    { username }: FetchGithubUser
  ) {
    const state = getState();
    return this.getGithubUser.execute(username).pipe(
      tap(user => {
        setState({
          ...state,
          user
        });
      }),
      catchError((err: HttpErrorResponse) => {
        alert('Something happened. Please try again.');
        return throwError(new Error(err.message));
      })
    );
  }
}
