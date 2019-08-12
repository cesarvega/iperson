import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';
import { ProfileComponent } from './profile/profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { NewsletterComponent } from './newsletter/newsletter.component';


const routes = [
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'password',
    component: ChangePasswordComponent
  },
  {
    path: 'news',
    component: NewsletterComponent
  },
];

@NgModule({
  declarations: [
    ProfileComponent,
    ChangePasswordComponent,
    NewsletterComponent],
  imports: [
    RouterModule.forChild(routes),

    TranslateModule,

    FuseSharedModule
  ],
  exports: [
    ProfileComponent,
    ChangePasswordComponent,
    NewsletterComponent
  ]
})

export class UserInfoModule { }
