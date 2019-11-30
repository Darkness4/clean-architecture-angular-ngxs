import { Injectable } from '@angular/core';

export abstract class GithubLocalDataSource {
  abstract cacheUser();
  abstract fetchLastUser();
}

@Injectable({
  providedIn: 'root'
})
export class GithubLocalDataSourceImpl implements GithubLocalDataSource {
  cacheUser() {
    // TODO: Implements
    throw new Error('Method not implemented.');
  }
  fetchLastUser() {
    // TODO: Implements
    throw new Error('Method not implemented.');
  }
}
