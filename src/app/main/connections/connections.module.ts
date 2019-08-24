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

const routes = [
  {
    path: 'service',
    component: PostServiceComponent
  },
  {
    path: 'connected',
    component: ConnectedComponent
  },
  {
    path: 'wall',
    component: WallComponent
  },
];

@NgModule({
  declarations: [PostServiceComponent, ConnectedComponent, WallComponent],
  imports: [
    RouterModule.forChild(routes),

    TranslateModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,

    FuseSharedModule
  ],
  exports: [
    PostServiceComponent, ConnectedComponent, WallComponent
  ]
})

export class ConnectionsModule { }
