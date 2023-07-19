import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-componente-hijo',
  templateUrl: './componente-hijo.component.html',
  styleUrls: ['./componente-hijo.component.scss']
})
export class ComponenteHijoComponent {


  nombre: string = '';
  costo: string = '';

  @Output() productoAgregado = new EventEmitter<{ nombre: string, costo: string }>();

  agregarProducto(nombre: string, costo: string) {
    if (nombre && costo) {
      this.productoAgregado.emit({ nombre, costo });
      this.nombre = '';
      this.costo = '';
    }
  }
}
