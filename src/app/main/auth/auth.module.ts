import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';


const routes = [
    {
        path     : 'login',
        component: LoginComponent
    },
    {
        path     : 'register',
        component: RegistrationComponent
    },
    {
        path     : 'recover',
        component: RecoverPasswordComponent
    }
];

@NgModule({
    declarations: [
        LoginComponent,
        RegistrationComponent,
        RecoverPasswordComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        TranslateModule,

        FuseSharedModule
    ],
    exports     : [
        LoginComponent
    ]
})

export class AuthModule { }
