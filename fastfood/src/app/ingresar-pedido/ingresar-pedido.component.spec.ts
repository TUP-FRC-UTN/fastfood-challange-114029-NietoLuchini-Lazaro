import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarPedidoComponent } from './ingresar-pedido.component';

describe('IngresarPedidoComponent', () => {
  let component: IngresarPedidoComponent;
  let fixture: ComponentFixture<IngresarPedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IngresarPedidoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngresarPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
