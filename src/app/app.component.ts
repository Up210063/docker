import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ServicioAPIService } from './servicio-api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular_Servicios_APIInegi';

  array: any = [];

  constructor(public servicioAPIService: ServicioAPIService){}

  recuperarDatos(): void {
    console.log("Entré");

    /* El método subescribe es para subscribirse al observable (uso del get en el servicio), cuando lleguen
    los datos, se ejecuta lo correspondiente a next que es llamar al método que recupera los datos y
    los guarda en el array de este componente, si hubiera un error tendríamos un mensaje en consola */

    this.servicioAPIService.retornar().subscribe({
      next: this.successRequest.bind(this), 
      /* El bind(this) es para que cuando llegue al método successRequest el this siga funcionando,
      sino se pierde el contexto. */
      error: (err) => {console.log("err")}    
    });
  } //Fin de recuperarDatos()

  successRequest(data: any): void {
    console.log(data);
    this.array = data.datos;
    console.log(this.array);
  }

} //Fin de la Clase