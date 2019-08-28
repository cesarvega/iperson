import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { AuthGuard } from '../services/auth/auth.guard';


const routes = [
  {
    path: 'password',
    component: ChangePasswordComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'news',
    component: NewsletterComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  declarations: [
    ChangePasswordComponent,
    NewsletterComponent],
  imports: [
    RouterModule.forChild(routes),
    TranslateModule,
    FuseSharedModule
  ],
  exports: [
    ChangePasswordComponent,
    NewsletterComponent
  ]
})

export class UserInfoModule { }
