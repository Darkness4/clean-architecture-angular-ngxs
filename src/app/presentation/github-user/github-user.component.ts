import { Component, OnInit } from '@angular/core';
import { GithubUserEntity } from 'src/app/domain/entities/github-user.entity';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { GithubUserState } from './github-user.state';
import { FetchGithubUser } from './github-user.actions';

@Component({
  selector: 'app-github-user',
  templateUrl: './github-user.component.html',
  styleUrls: ['./github-user.component.scss']
})
export class GithubUserComponent implements OnInit {
  @Select(GithubUserState.getGithubUser) user$: Observable<GithubUserEntity>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.fetchGithubUser('Darkness4');
  }

  fetchGithubUser(username: string) {
    this.store.dispatch(new FetchGithubUser(username));
  }
}
