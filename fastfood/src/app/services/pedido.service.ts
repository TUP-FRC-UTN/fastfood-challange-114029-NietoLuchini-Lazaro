import { Injectable } from '@angular/core';
import { Pedidos } from '../../models/pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor() { }

  listPedidos:Pedidos[]=[];

  listPedidosListos:Pedidos[]=[];

  getAllPedidos():Pedidos[]{
    return this.listPedidos;
  }

  addPedido(pedido:Pedidos){
    this.listPedidos.push(pedido);
  }

  getPedidosListos():Pedidos[]{
    return this.listPedidosListos;
  
  }

  addPedidoListo(pedido:Pedidos){
    this,this.listPedidosListos.push(pedido);
  }

}
