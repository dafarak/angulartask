import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserdataComponent } from '../app/userdata/userdata.component';
import { CheckboxGuard } from './checkbox.guard';
const routes: Routes = [
  { path: 'user', component:  UserComponent   },
  { path: 'view',canActivate: [CheckboxGuard], component:  UserdataComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
