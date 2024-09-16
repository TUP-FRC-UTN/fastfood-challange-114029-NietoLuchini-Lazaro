import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IngresarPedidoComponent } from './ingresar-pedido/ingresar-pedido.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,IngresarPedidoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fastfood';
}
