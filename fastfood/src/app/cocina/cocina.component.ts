import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../services/pedido.service';
import { Pedidos } from '../../models/pedido';
import { NgFor } from '@angular/common';
import { PedidosListosComponent } from '../pedidos-listos/pedidos-listos.component';
import { VisualizerService } from '../services/visualizer.service';
import { Configuration } from '../../models/visualizer';

@Component({
  selector: 'app-cocina',
  standalone: true,
  imports: [NgFor,PedidosListosComponent],
  templateUrl: './cocina.component.html',
  styleUrl: './cocina.component.css'
})
export class CocinaComponent implements OnInit {

  constructor(private pedidoService:PedidoService,private visualizer:VisualizerService){}

  listPedidos:Pedidos[]=[];

  listPedidosEnCoccion:Pedidos[]=[];

  listPedidosTerminados:Pedidos[]=[];

  ngOnInit(): void {
    
    this.listPedidos=this.pedidoService.getAllPedidos();
    this.config=this.visualizer.getConfiguration();
  }

  cocinarPedido(pedido:Pedidos){

    if(this.listPedidosEnCoccion.length===0){
      this.listPedidosEnCoccion.push(pedido);
      const index= this.listPedidos.indexOf(pedido)

      this.listPedidos.splice(index,1);
    }else{
      alert("Ya hay un pedido cocinandose!");
    }

  }

  pedidoTerminado(pedido:Pedidos){

    this.listPedidosEnCoccion.pop();

    this.listPedidosTerminados.push(pedido);

    this.pedidoService.addPedidoListo(pedido);
  
  }

  config?:Configuration;
  prueba:boolean=false;

  irApedidosListos(){
    this.visualizer.toggleShowPedidosListos();
    this.visualizer.toggleShowCocina();
    this.prueba=true;
  }

}
