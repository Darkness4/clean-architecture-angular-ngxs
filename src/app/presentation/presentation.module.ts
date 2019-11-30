import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { DataModule } from '../data/data.module';
import { GithubUserComponent } from './github-user/github-user.component';
import { DomainModule } from '../domain/domain.module';

@NgModule({
  imports: [CommonModule, CoreModule, DomainModule, DataModule],
  declarations: [GithubUserComponent],
  exports: [GithubUserComponent],
  providers: []
})
export class PresentationModule {}
