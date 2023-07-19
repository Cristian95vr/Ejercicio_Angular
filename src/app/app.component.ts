import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  titulo:string="Lista de Productos"
  mostrarLista: boolean = true;
  productos: { nombre: string, costo: string }[] = [
    {nombre:"Leche", costo:"450"},
    {nombre:"Azucar", costo:"500"},
    {nombre:"Yerba mate", costo:"400"}
  ];

  agregarProducto(producto: { nombre: string, costo: string }) {
    this.productos.push(producto);
  }

  lista() {
    this.mostrarLista = !this.mostrarLista;
  }
}
