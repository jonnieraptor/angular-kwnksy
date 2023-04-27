import { Component } from '@angular/core';
import { Router } from '@angular/router';

export interface PeriodicElement {
  nombre: string;
  posicion: number;
  detalle: string;
  enviar: string;
  eliminar: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    posicion: 1,
    nombre: 'PLANTILLA_000001_bistmo.230313143623.txt',
    detalle: '',
    enviar: '',
    eliminar: '',
  },
  {
    posicion: 2,
    nombre: 'PLANTILLA_000001_clave138.230313143623.txt',
    detalle: '',
    enviar: '',
    eliminar: '',
  },
  {
    posicion: 3,
    nombre: 'PLANTILLA_000001_clave172.230313143623.txt',
    detalle: '',
    enviar: '',
    eliminar: '',
  },
  {
    posicion: 4,
    nombre: 'PLANTILLA_000001_clave225.230313143623.txt',
    detalle: '',
    enviar: '',
    eliminar: '',
  },
  {
    posicion: 5,
    nombre: 'PLANTILLA_000001_clave232.230313143623.txt',
    detalle: '',
    enviar: '',
    eliminar: '',
  },
  {
    posicion: 6,
    nombre: 'PLANTILLA_000001_clave394.230313143623.txt',
    detalle: '',
    enviar: '',
    eliminar: '',
  },
  {
    posicion: 7,
    nombre: 'PLANTILLA_000001_clave394.230313143623.txt',
    detalle: '',
    enviar: '',
    eliminar: '',
  },
  {
    posicion: 8,
    nombre: 'PLANTILLA_000001_clave55K.230313143623.txt',
    detalle: '',
    enviar: '',
    eliminar: '',
  },
  {
    posicion: 9,
    nombre: 'PLANTILLA_000001_claveE14.230313143623.txt',
    detalle: '',
    enviar: '',
    eliminar: '',
  },
  {
    posicion: 10,
    nombre: 'PLANTILLA_000001_clave403.230313143623.txt',
    detalle: '',
    enviar: '',
    eliminar: '',
  },
];

@Component({
  selector: 'app-procesados',
  templateUrl: './procesados.component.html',
  styleUrls: ['./procesados.component.css'],
})
export class ProcesadosComponent {
  displayedColumns: string[] = [
    'posicion',
    'nombre',
    'detalle',
    'enviar',
    'eliminar',
  ];
  dataSource = ELEMENT_DATA;

  constructor(private router: Router) {}

  public app_name: string = 'Planilla pre-elaborada';
  public archivo: string = '';

  logout() {
    this.router.navigate(['/login']);
  }

  detalle(nombre: string) {
    this.archivo = nombre;
    this.router.navigate(['detalle']);
  }
}
