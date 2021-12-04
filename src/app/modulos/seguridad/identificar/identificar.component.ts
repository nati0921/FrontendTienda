import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-identificar',
  templateUrl: './identificar.component.html',
  styleUrls: ['./identificar.component.css']
})
export class IdentificarComponent implements OnInit {

  fgValidador : FormGroup = this.fb.group({
    'usuario': ['',[Validators.required, Validators.email]],
    'clave': ['',[Validators.required]]
  })
  constructor(private fb: FormBuilder, 
    private servicioSeguridad: SeguridadService) { }

  ngOnInit(): void {
  }

  IdentificaUsuario(){
    let usuario = this.fgValidador.controls['usuario'].value;
    let clave = this.fgValidador.controls['clave'].value;
    let claveCifrada = CryptoJS.MD5(clave).toString();

    this.servicioSeguridad.Identificar(usuario,claveCifrada).subscribe((datos:any)=>{
      //ok
      alert("Datos correctos")
    },(error:any)=>{
      //ko
      alert("Datos invalidos")
    })
  }
}
