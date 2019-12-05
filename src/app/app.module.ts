import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './presentation/app/app.component';
import { DataModule } from './data/data.module';
import { CoreModule } from './core/core.module';
import { PresentationModule } from './presentation/presentation.module';
import { DomainModule } from './domain/domain.module';

import { GithubUserRepository } from './domain/repositories/github-user.repository';
import { GithubUserRepositoryImpl } from './data/repositories/github-user.repository.impl';
import {
  GithubLocalDataSource,
  GithubLocalDataSourceImpl
} from './data/datasources/github-local.data-source';
import {
  GithubRemoteDataSourceImpl,
  GithubRemoteDataSource
} from './data/datasources/github-remote.data-source';
import { GetGithubUser } from './domain/usecases/get-github-user';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { RouterStateSerializer } from '@ngxs/router-plugin';
import { CustomRouterStateSerializer } from './presentation/router/router-state.serializer';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    CoreModule,
    DataModule,
    DomainModule,
    PresentationModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    })
  ],
  providers: [
    { provide: GithubUserRepository, useClass: GithubUserRepositoryImpl },
    { provide: GithubLocalDataSource, useClass: GithubLocalDataSourceImpl },
    { provide: GithubRemoteDataSource, useClass: GithubRemoteDataSourceImpl },
    { provide: GetGithubUser, useClass: GetGithubUser },
    { provide: RouterStateSerializer, useClass: CustomRouterStateSerializer }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
