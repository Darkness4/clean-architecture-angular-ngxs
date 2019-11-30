import { Observable } from 'rxjs';
import { GithubUserEntity } from '../entities/github-user.entity';

export abstract class GithubUserRepository {
  abstract get(username: string): Observable<GithubUserEntity>;
}
