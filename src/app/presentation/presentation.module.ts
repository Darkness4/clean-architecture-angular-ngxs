import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { DataModule } from '../data/data.module';
import { GithubUserComponent } from './github-user/github-user.component';
import { DomainModule } from '../domain/domain.module';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { GithubUserState } from './github-user/github-user.state';
import { environment } from 'src/environments/environment';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    DomainModule,
    DataModule,
    NgxsModule.forRoot([GithubUserState], {
      developmentMode: !environment.production
    }),
    NgxsLoggerPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot()
  ],
  declarations: [GithubUserComponent],
  exports: [GithubUserComponent],
  providers: []
})
export class PresentationModule {}
