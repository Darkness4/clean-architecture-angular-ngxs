import { GithubUserRepository } from 'src/app/domain/repositories/github-user.repository';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GithubUserEntity } from 'src/app/domain/entities/github-user.entity';
import { GithubRemoteDataSource } from '../datasources/github-remote.data-source';
import { GithubUserMapper } from 'src/app/domain/repositories/github-user-repository-mapper';
import { Injectable } from '@angular/core';
import { GithubLocalDataSource } from '../datasources/github-local.data-source';

@Injectable({
  providedIn: 'root'
})
export class GithubUserRepositoryImpl implements GithubUserRepository {
  private readonly mapper = new GithubUserMapper();

  constructor(
    private remoteDataSource: GithubRemoteDataSource,
    private localDataSource: GithubLocalDataSource
  ) {}

  public get(username: string): Observable<GithubUserEntity> {
    return this.remoteDataSource
      .fetchUser(username)
      .pipe(map(this.mapper.mapFrom));
  }
}
