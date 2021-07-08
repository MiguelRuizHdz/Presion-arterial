import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RegistroComponent } from './registro/registro.component';
import { RegistrosComponent } from './registros/registros.component';



@NgModule({
  declarations: [
    RegistroComponent,
    RegistrosComponent
  ],
  exports: [
    RegistroComponent,
    RegistrosComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
