import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GithubUserComponent } from './presentation/github-user/github-user.component';

const routes: Routes = [
  { path: '', redirectTo: '/githubUser', pathMatch: 'full' },
  { path: 'githubUser', component: GithubUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
