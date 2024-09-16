import { Injectable } from '@angular/core';
import { Configuration } from '../../models/visualizer';

@Injectable({
  providedIn: 'root'
})
export class VisualizerService {

  private configuration: Configuration={
    showIngresarPedido:true,
    showCocina:false,
    showPedidosListos:false
  }


  constructor() { }

  getConfiguration(){
    return this.configuration;
  }


  toggleShowIngresarPedido(){
    this.configuration.showIngresarPedido=!this.configuration.showIngresarPedido;
  
  }

  toggleShowCocina(){
    this.configuration.showCocina=!this.configuration.showCocina;
   
  }

  toggleShowPedidosListos(){
    this.configuration.showPedidosListos=!this.configuration.showPedidosListos;
  }
}
