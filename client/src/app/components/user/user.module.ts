import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import {UserNavbarComponent} from './user-navbar/user-navbar.component';
import {UserSidebarComponent} from './user-sidebar/user-sidebar.component';
import {UserBoardComponent} from './user-board/user-board.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {UserProfileComponent} from './user-profile/user-profile.component';

@NgModule({
  declarations: [
    UserComponent,
    UserSidebarComponent,
    UserNavbarComponent,
    UserBoardComponent,
    UserProfileComponent
  ],
    imports: [
        CommonModule,
        UserRoutingModule,
        NgbModule,
    ],
})
export class UserModule {
}
