import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloIdentificar } from '../modelos/identificar.modelo';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  constructor(private http: HttpClient) {


   }
   //1. Recuperar los datos de la base de datos y validar si corresponden a los ingresados en el formulario
   Identificar(usuario: string, clave: string): Observable<ModeloIdentificar>{
     //Origen de datos del servidor Backend
    return this.http.post<ModeloIdentificar>("http://localhost:3000/identificarPersona",{
      //Parámetros
      usuario: usuario,
      clave: clave
    },{
      headers: new HttpHeaders({

      })
    })
   }
   //2. Almacenar los datos en el navegador, localStorage, para determinar acciones en el menú mostrado
   AlmamcenarSesion(datos: ModeloIdentificar){
     
    //Convertir de Json a String
    let datosString= JSON.stringify(datos);
    //Llave y Datos
    localStorage.setItem("datosSesion", datosString);
   }

   // 3. Extraer los datos de la sesion
   ObtenerInformacionSesion(){
     let datosString= localStorage.getItem("datosSesion");
     if(datosString){
       //Convertir String a Json
       let datos = JSON.parse(datosString);
       return datos;
     }else{
       return null;
     }
   }

   EliminarInformacionSesion(){
     localStorage.removeItem("datosSesion");
   }
}
