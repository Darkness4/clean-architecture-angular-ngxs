import { HttpClient } from '@angular/common/http';
import { GithubUserModel } from '../models/github-user.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

export abstract class GithubRemoteDataSource {
  abstract fetchUser(username: string): Observable<GithubUserModel>;
}

@Injectable({
  providedIn: 'root'
})
export class GithubRemoteDataSourceImpl implements GithubRemoteDataSource {
  constructor(private client: HttpClient) {}

  fetchUser(username: string): Observable<GithubUserModel> {
    return this.client.get<GithubUserModel>(
      `https://api.github.com/users/${username}`
    );
  }
}
