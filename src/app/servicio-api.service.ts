import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //Configuración del uso de la librería HttpClient
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioAPIService {

  constructor(private http: HttpClient) { };

  retornar() {
    return this.http.get("https://lambo.free.beeceptor.com/todos").pipe(take(1));
    /* El get permite indicar la URL del API que se quiere.
    El pipe(take(1)) es para que el API sólo sea llamado una vez, el get retorna un observable que
    cada vez que existan cambios en los datos de esa URL seremos informados, por esto sólo le decimos
    que sólo queremos los datos una vez. */
  }
} //Fin de la Clase