import { TestBed, async } from '@angular/core/testing';
import {
  GithubRemoteDataSource,
  GithubRemoteDataSourceImpl
} from './github-remote.data-source';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { GithubUserModel } from '../models/github-user.model';
import { HttpErrorResponse } from '@angular/common/http';

describe('GithubRemoteDataSourceImpl', () => {
  let dataSource: GithubRemoteDataSource;
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: GithubRemoteDataSource,
          useClass: GithubRemoteDataSourceImpl
        }
      ]
    });

    dataSource = TestBed.inject(GithubRemoteDataSource);
    httpMock = TestBed.inject(HttpTestingController);
  }));

  afterEach(() => {
    httpMock.verify();
  });

  describe('fetchUser', () => {
    // arrange
    let tUser = 'lambda';
    let expectedUserModel: GithubUserModel = {
      login: 'login',
      id: 0,
      node_id: 'node_id',
      avatar_url: 'avatar_url',
      gravatar_id: 'gravatar_id',
      url: 'url',
      html_url: 'html_url',
      followers_url: 'followers_url',
      following_url: 'following_url',
      gists_url: 'gists_url',
      starred_url: 'starred_url',
      subscriptions_url: 'subscriptions_url',
      organizations_url: 'organizations_url',
      repos_url: 'repos_url',
      events_url: 'events_url',
      received_events_url: 'received_events_url',
      type: 'type',
      site_admin: false,
      name: 'name',
      company: 'company',
      blog: 'blog',
      location: 'location',
      email: 'email',
      hireable: false,
      bio: 'bio',
      public_repos: 0,
      public_gists: 0,
      followers: 0,
      following: 0,
      created_at: '1970-01-01T00:00:00Z',
      updated_at: '1970-01-01T00:00:00Z'
    };

    it('should perform a GET request on a URL with tUser being the endpoint', async(() => {
      // act
      dataSource.fetchUser(tUser).subscribe();
      // assert
      let resp = httpMock.expectOne({
        method: 'GET',
        url: `https://api.github.com/users/${tUser}`
      });
      expect(resp.request.method).toBe('GET');
      expect(resp.request.url).toBe(`https://api.github.com/users/${tUser}`);
      resp.flush(expectedUserModel);
    }));

    it('should return GithubUserModel when the response code is 200 (success)', async(() => {
      // arrange
      // act
      dataSource
        .fetchUser(tUser)
        .subscribe(user =>
          expect(user).toEqual(expectedUserModel, 'expectedUserModel')
        );
      // assert
      let resp = httpMock.expectOne({
        method: 'GET',
        url: `https://api.github.com/users/${tUser}`
      });
      resp.flush(expectedUserModel);
    }));

    it('should throw a ServerException when the response code is 404 or other', async(() => {
      // arrange
      let response: any;
      let errResponse: HttpErrorResponse;

      const mockErrorResponse: HttpErrorResponse = new HttpErrorResponse({
        url: `https://api.github.com/users/${tUser}`,
        status: 404,
        statusText: 'Not found',
        error: 'Not found'
      });
      const data = 'Not found';
      // act
      dataSource.fetchUser(tUser).subscribe(
        res => (response = res),
        err => (errResponse = err)
      );

      // assert
      let resp = httpMock.expectOne({
        method: 'GET',
        url: `https://api.github.com/users/${tUser}`
      });
      resp.flush(data, mockErrorResponse);
      expect(errResponse).toEqual(mockErrorResponse);
    }));
  });
});
