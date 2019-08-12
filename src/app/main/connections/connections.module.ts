import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';
import { PostServiceComponent } from './post-service/post-service.component';
import { ConnectedComponent } from './connected/connected.component';
import { WallComponent } from './wall/wall.component';


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

    FuseSharedModule
  ],
  exports: [
    PostServiceComponent, ConnectedComponent, WallComponent
  ]
})

export class ConnectionsModule { }
