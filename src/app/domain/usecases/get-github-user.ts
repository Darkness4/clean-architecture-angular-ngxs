import { Usecase } from 'src/app/core/usecases/usecase';
import { GithubUserEntity } from '../entities/github-user.entity';
import { Observable } from 'rxjs';
import { GithubUserRepository } from '../repositories/github-user.repository';

@Injectable({
  providedIn: 'root'
})
export class GetGithubUser implements Usecase<GithubUserEntity, Params> {
  constructor(private repository: GithubUserRepository) {}

  execute(params: Params): Observable<GithubUserEntity> {
    return this.repository.get(params.username);
  }
}

class Params {
  username: string;
}
