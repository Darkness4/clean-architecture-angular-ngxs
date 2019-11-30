import { Usecase } from 'src/app/core/usecases/usecase';
import { GithubUserEntity } from '../entities/github-user.entity';
import { Observable } from 'rxjs';
import { GithubUserRepository } from '../repositories/github-user.repository';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetGithubUser implements Usecase<GithubUserEntity, Params> {
  constructor(private repository: GithubUserRepository) {}

  execute(params: Params): Observable<GithubUserEntity> {
    return this.repository.get(params.username);
  }
}

export class Params {
  constructor(public username: string) {}
}
