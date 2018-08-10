import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AddlistComponent } from './addlist/addlist.component';
const routes: Routes = [
  { path: '', redirectTo: '/addlist', pathMatch: 'full' },
  { path: 'addlist', component: AddlistComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class RoutingModule {}