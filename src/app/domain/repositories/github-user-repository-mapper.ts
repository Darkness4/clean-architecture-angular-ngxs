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
      nodeId: param.nodeId,
      avatarUrl: param.avatarUrl,
      gravatarId: param.gravatarId,
      url: param.url,
      htmlUrl: param.htmlUrl,
      followersUrl: param.followersUrl,
      followingUrl: param.followingUrl,
      gistsUrl: param.gistsUrl,
      starredUrl: param.starredUrl,
      subscriptionsUrl: param.subscriptionsUrl,
      organizationsUrl: param.organizationsUrl,
      reposUrl: param.reposUrl,
      eventsUrl: param.eventsUrl,
      receivedEventsUrl: param.receivedEventsUrl,
      type: param.type,
      siteAdmin: param.siteAdmin,
      name: param.name,
      company: param.company,
      blog: param.blog,
      location: param.location,
      email: param.email,
      hireable: param.hireable,
      bio: param.bio,
      publicRepos: param.publicRepos,
      publicGists: param.publicGists,
      followers: param.followers,
      following: param.following,
      createdAt: param.createdAt,
      updatedAt: param.updatedAt
    };
  }

  mapTo(param: GithubUserModel): GithubUserEntity {
    return {
      login: param.login,
      id: param.id,
      nodeId: param.nodeId,
      avatarUrl: param.avatarUrl,
      gravatarId: param.gravatarId,
      url: param.url,
      htmlUrl: param.htmlUrl,
      followersUrl: param.followersUrl,
      followingUrl: param.followingUrl,
      gistsUrl: param.gistsUrl,
      starredUrl: param.starredUrl,
      subscriptionsUrl: param.subscriptionsUrl,
      organizationsUrl: param.organizationsUrl,
      reposUrl: param.reposUrl,
      eventsUrl: param.eventsUrl,
      receivedEventsUrl: param.receivedEventsUrl,
      type: param.type,
      siteAdmin: param.siteAdmin,
      name: param.name,
      company: param.company,
      blog: param.blog,
      location: param.location,
      email: param.email,
      hireable: param.hireable,
      bio: param.bio,
      publicRepos: param.publicRepos,
      publicGists: param.publicGists,
      followers: param.followers,
      following: param.following,
      createdAt: param.createdAt,
      updatedAt: param.updatedAt
    };
  }
}
