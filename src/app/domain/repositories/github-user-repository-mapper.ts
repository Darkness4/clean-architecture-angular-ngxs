import { Mapper } from '../../core/mapper';
import { GithubUserEntity } from '../entities/github-user.entity';
import { GithubUserModel } from 'src/app/data/models/github-user.model';

export class GithubUserMapper extends Mapper<
  GithubUserEntity,
  GithubUserModel
> {
  mapFrom(param: GithubUserEntity): GithubUserModel {
    return {
      login: param.login,
      id: param.id,
      node_id: param.node_id,
      avatar_url: param.avatar_url,
      gravatar_id: param.gravatar_id,
      url: param.url,
      html_url: param.html_url,
      followers_url: param.followers_url,
      following_url: param.following_url,
      gists_url: param.gists_url,
      starred_url: param.starred_url,
      subscriptions_url: param.subscriptions_url,
      organizations_url: param.organizations_url,
      repos_url: param.repos_url,
      events_url: param.events_url,
      received_events_url: param.received_events_url,
      type: param.type,
      site_admin: param.site_admin,
      name: param.name,
      company: param.company,
      blog: param.blog,
      location: param.location,
      email: param.email,
      hireable: param.hireable,
      bio: param.bio,
      public_repos: param.public_repos,
      public_gists: param.public_gists,
      followers: param.followers,
      following: param.following,
      created_at: param.created_at,
      updated_at: param.updated_at
    };
  }

  mapTo(param: GithubUserModel): GithubUserEntity {
    return {
      login: param.login,
      id: param.id,
      node_id: param.node_id,
      avatar_url: param.avatar_url,
      gravatar_id: param.gravatar_id,
      url: param.url,
      html_url: param.html_url,
      followers_url: param.followers_url,
      following_url: param.following_url,
      gists_url: param.gists_url,
      starred_url: param.starred_url,
      subscriptions_url: param.subscriptions_url,
      organizations_url: param.organizations_url,
      repos_url: param.repos_url,
      events_url: param.events_url,
      received_events_url: param.received_events_url,
      type: param.type,
      site_admin: param.site_admin,
      name: param.name,
      company: param.company,
      blog: param.blog,
      location: param.location,
      email: param.email,
      hireable: param.hireable,
      bio: param.bio,
      public_repos: param.public_repos,
      public_gists: param.public_gists,
      followers: param.followers,
      following: param.following,
      created_at: param.created_at,
      updated_at: param.updated_at
    };
  }
}
