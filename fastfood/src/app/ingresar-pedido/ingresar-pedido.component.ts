import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Pedidos } from '../../models/pedido';
import { PedidoService } from '../services/pedido.service';
import { VisualizerService } from '../services/visualizer.service';
import { CocinaComponent } from '../cocina/cocina.component';
import { Configuration } from '../../models/visualizer';

@Component({
  selector: 'app-ingresar-pedido',
  standalone: true,
  imports: [FormsModule,CocinaComponent],
  templateUrl: './ingresar-pedido.component.html',
  styleUrl: './ingresar-pedido.component.css'
})
export class IngresarPedidoComponent implements OnInit {


constructor(private pedidoService:PedidoService,private visualizer:VisualizerService){}

  ngOnInit(): void {
    this.config=this.visualizer.getConfiguration();
  }

  nombre:string="";
  pedido:string="";
  config?:Configuration;
  


  guardarPedido(form:any){

    const newPedido:Pedidos={

      number:  Math.floor(Math.random() * 1000) + 1,
      name: form.value.nombre,
      description: form.value.pedido,
      date: new Date()
    }
    alert("Pedido cargado correctamente!")
    this.pedidoService.addPedido(newPedido);

  }

  irCocina(){
    
    this.visualizer.toggleShowCocina();
    this.visualizer.toggleShowIngresarPedido();

  }

}
