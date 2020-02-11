import { GithubUserRepository } from 'src/app/domain/repositories/github-user.repository';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GithubUserEntity } from 'src/app/domain/entities/github-user.entity';
import { GithubRemoteDataSource } from '../datasources/github-remote.data-source';
import { GithubUserMapper } from 'src/app/domain/repositories/github-user-repository-mapper';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GithubUserRepositoryImpl implements GithubUserRepository {
  constructor(
    private remoteDataSource: GithubRemoteDataSource,
    private mapper: GithubUserMapper
  ) {}

  public get(username: string): Observable<GithubUserEntity> {
    // TODO: Fetch local server if remote is dead.
    return this.remoteDataSource
      .fetchUser(username)
      .pipe(map(this.mapper.mapFrom));
  }
}
