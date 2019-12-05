import { Component, OnInit } from '@angular/core';
import { GithubUserEntity } from 'src/app/domain/entities/github-user.entity';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { FetchGithubUser } from './github-user.actions';
import { GithubUserSelectors } from './github-user.selectors';

@Component({
  selector: 'app-github-user',
  templateUrl: './github-user.component.html',
  styleUrls: ['./github-user.component.scss']
})
export class GithubUserComponent implements OnInit {
  @Select(GithubUserSelectors.getGithubUser) user$: Observable<
    GithubUserEntity
  >;

  // @Select(GithubUserSelectors.getLoading) loading$: Observable<boolean>;

  // @Select(GithubUserSelectors.getError) error$: Observable<any>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.fetchGithubUser('Darkness4');
  }

  fetchGithubUser(username: string) {
    this.store.dispatch(new FetchGithubUser(username));
  }
}
