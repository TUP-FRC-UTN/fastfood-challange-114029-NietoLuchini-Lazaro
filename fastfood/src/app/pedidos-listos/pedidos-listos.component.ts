import { NgFor } from '@angular/common';
import { Component, Input, input, OnInit } from '@angular/core';
import { Pedidos } from '../../models/pedido';
import { PedidoService } from '../services/pedido.service';

@Component({
  selector: 'app-pedidos-listos',
  standalone: true,
  imports: [NgFor],
  templateUrl: './pedidos-listos.component.html',
  styleUrl: './pedidos-listos.component.css'
})
export class PedidosListosComponent implements OnInit{

  constructor(private pedidoService:PedidoService){}

  listPedidosListos:Pedidos[]=[];

  ngOnInit(): void {
   console.log(this.listPedidosListos);
   this.listPedidosListos=this.pedidoService.getPedidosListos();
  }

  


 


  entregado():void{
    alert("Pedido entregado con exito!");
    this.listPedidosListos.pop();
  }

  
}
