import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataModule } from './data/data.module';
import { CoreModule } from './core/core.module';
import { PresentationModule } from './presentation/presentation.module';
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
import { DomainModule } from './domain/domain.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    DataModule,
    DomainModule,
    PresentationModule
  ],
  providers: [
    { provide: GithubUserRepository, useClass: GithubUserRepositoryImpl },
    { provide: GithubLocalDataSource, useClass: GithubLocalDataSourceImpl },
    { provide: GithubRemoteDataSource, useClass: GithubRemoteDataSourceImpl },
    { provide: GetGithubUser, useClass: GetGithubUser }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
