import { GithubUserEntity } from 'src/app/domain/entities/github-user.entity';

export interface GithubUserStateModel {
  user?: GithubUserEntity;
  error?: any;
  loading: boolean;
}
