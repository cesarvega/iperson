import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthGuard } from '../services/auth/auth.guard';

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

        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,


        FuseSharedModule,
        
    ],
    exports     : [
        LoginComponent
    ],
    providers: [AngularFirestore, AuthGuard]
})

export class AuthModule { }
