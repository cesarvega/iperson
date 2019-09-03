import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';
import { PostServiceComponent } from './post-service/post-service.component';
import { ConnectedComponent } from './connected/connected.component';
import { WallComponent } from './wall/wall.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import { PostListComponent } from './post-service/post-list/post-list.component';
import { AuthGuard } from '../services/auth/auth.guard';
import { MatButtonToggle } from '@angular/material/button-toggle';

const routes = [
  {
    path: 'service',
    component: PostServiceComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'serviceList',
    component: PostListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'connected',
    component: ConnectedComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'wall',
    component: WallComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  declarations: [
    PostServiceComponent,
    ConnectedComponent,
    WallComponent,
    PostListComponent],
  imports: [
    RouterModule.forChild(routes),

    TranslateModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,

    FuseSharedModule
  ],
  exports: [
    PostServiceComponent, ConnectedComponent, WallComponent
  ]
})

export class ConnectionsModule { }
