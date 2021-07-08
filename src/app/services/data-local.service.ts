import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Registro } from '../pages/tab1/tab1.page';
import { Storage } from '@ionic/storage-angular';
import { async } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataLocalService {
  
  registros: Registro[] = [];

  constructor( private storage: Storage,
               public toastController: ToastController) {
    this.storage.create();
    this.cargarRegistros();
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 1500,
    });
    toast.present();
  }

  async guardarRegistro( registro: Registro ){
    this.registros.unshift( registro );
    await this.storage.set('registros', this.registros );
    this.presentToast('Se agregó a registros');
  }

  async cargarRegistros(){
    const registros = await this.storage.get('registros');
    if ( registros ){
      this.registros = registros;
    }
  }

  async borrarTodosRegistros(){
    await this.storage.remove('registros')
    this.presentToast('Se borraron los registros');
    this.cargarRegistros();
  }


}
