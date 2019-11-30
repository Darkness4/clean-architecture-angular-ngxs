import { Component, OnInit } from '@angular/core';
import { GetGithubUser, Params } from 'src/app/domain/usecases/get-github-user';
import { GithubUserEntity } from 'src/app/domain/entities/github-user.entity';

@Component({
  selector: 'app-github-user',
  templateUrl: './github-user.component.html',
  styleUrls: ['./github-user.component.scss']
})
export class GithubUserComponent implements OnInit {
  user: GithubUserEntity;

  constructor(private getGithubUser: GetGithubUser) {}

  ngOnInit() {
    this.getGithubUser
      .execute(new Params('Darkness4'))
      .subscribe((value: GithubUserEntity) => {
        this.user = value;
      });
  }
}
