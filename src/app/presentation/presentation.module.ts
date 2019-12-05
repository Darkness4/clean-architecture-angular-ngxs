import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsRouterPluginModule, RouterState } from '@ngxs/router-plugin';

import { CoreModule } from '../core/core.module';
import { DataModule } from '../data/data.module';
import { DomainModule } from '../domain/domain.module';
import { MaterialModule } from './material/material.module';

import { GithubUserComponent } from './github-user/github-user.component';
import { GithubUserState } from './github-user/github-user.state';
import { environment } from '../../environments/environment';
import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    AppRoutingModule,
    MaterialModule,
    CommonModule,
    CoreModule,
    DomainModule,
    DataModule,
    NgxsModule.forRoot([RouterState, GithubUserState], {
      developmentMode: !environment.production
    }),
    NgxsLoggerPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsRouterPluginModule.forRoot()
  ],
  declarations: [GithubUserComponent, AppComponent],
  exports: [],
  providers: []
})
export class PresentationModule {}
