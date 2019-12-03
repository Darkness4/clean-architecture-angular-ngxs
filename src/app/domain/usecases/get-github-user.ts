import { Usecase } from 'src/app/core/usecases/usecase';
import { GithubUserEntity } from '../entities/github-user.entity';
import { Observable } from 'rxjs';
import { GithubUserRepository } from '../repositories/github-user.repository';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetGithubUser implements Usecase<GithubUserEntity, string> {
  constructor(private repository: GithubUserRepository) {}

  execute(username: string): Observable<GithubUserEntity> {
    return this.repository.get(username);
  }
}
