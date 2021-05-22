import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DuelRoomRoutingModule } from './duel-room-routing.module';
import { DuelRoomComponent } from './duel-room.component';


@NgModule({
  declarations: [
    DuelRoomComponent
  ],
  imports: [
    CommonModule,
    DuelRoomRoutingModule
  ]
})
export class DuelRoomModule { }
