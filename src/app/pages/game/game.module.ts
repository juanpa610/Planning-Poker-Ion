import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GamePageRoutingModule } from './game-routing.module';

import { GamePage } from './game.page';
import { FormUserComponent } from 'src/app/components/form-user/form-user.component';
import { TableComponent } from 'src/app/components/table/table.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    GamePageRoutingModule
  ],
  declarations: [GamePage,FormUserComponent,TableComponent]
})
export class GamePageModule {}
