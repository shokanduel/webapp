import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DuelRoomComponent } from './duel-room.component';

const routes: Routes = [
  { path: '', component: DuelRoomComponent, children: [

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DuelRoomRoutingModule { }
