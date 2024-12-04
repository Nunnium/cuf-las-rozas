import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabeceraComponent } from "./components/cabecera/cabecera.component";
import { InicioComponent } from "./components/paginas/inicio/inicio.component";
import { BarraLateralComponent } from "./components/barra-lateral/barra-lateral/barra-lateral.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CabeceraComponent, InicioComponent, BarraLateralComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cuf-las-rozas';
}
