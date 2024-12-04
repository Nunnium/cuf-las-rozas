import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UtilesService } from '../../service/utiles/utiles.service';

@Component({
  selector: 'cuflr-cabecera',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cabecera.component.html',
  styleUrl: './cabecera.component.css'
})

export class CabeceraComponent {
  cabecera: any;

  constructor(
    private utilesService: UtilesService
  ) { }

  ngOnInit() {
    this.utilesService.obtenerJson('cabecera.json').subscribe(data => {
      console.log(data);
      this.cabecera = data;
    }
    )

  }

  abrirMenu() {
    let menu = document.getElementById('menu_cabecera');
    if (menu) {
      if (menu.style.display == 'block') {
        menu.style.display = 'none';
      } else {
        menu.style.display = 'block';
      }
    }
  }
}
