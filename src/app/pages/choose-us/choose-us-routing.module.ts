import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChooseUsComponent } from './choose-us.component';

const routes: Routes = [{ path: '', component: ChooseUsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChooseUsRoutingModule { }
