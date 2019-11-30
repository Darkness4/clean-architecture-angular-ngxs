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
class GithubUserRepositoryImpl implements GithubUserRepository {
  public remoteDataSource: GithubRemoteDataSource;
  public localDataSource: GithubRemoteDataSource;
  private readonly mapper = new GithubUserMapper();

  construtor({
    remoteDataSource,
    localDataSource
  }: {
    remoteDataSource: GithubRemoteDataSource;
    localDataSource: GithubRemoteDataSource;
  }) {
    this.remoteDataSource = remoteDataSource;
    this.localDataSource = localDataSource;
  }

  public get(username: string): Observable<GithubUserEntity> {
    return this.remoteDataSource
      .fetchUser(username)
      .pipe(map(this.mapper.mapFrom));
  }
}
