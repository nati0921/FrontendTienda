import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ModeloPersona } from 'src/app/modelos/persona.modelo';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-editar-personas',
  templateUrl: './editar-personas.component.html',
  styleUrls: ['./editar-personas.component.css']
})
export class EditarPersonasComponent implements OnInit {

  fgValidador : FormGroup = this.fb.group({
    'nombrePersona': ['',[Validators.required]],
    'apellidoPersona': ['',[Validators.required]],
    'direccionPersona': ['',[Validators.required]],
    'celularPersona': ['',[Validators.required]],
    'correoPersona': ['',[Validators.required]],
    'id': ['',[Validators.required]]
  })

  id:string="";
  constructor(private fb:FormBuilder,
    private servicioPersona:PersonaService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id= this.route.snapshot.params["id"];
  }

  EditarPersona(){
    let nombrePersona = this.fgValidador.controls["nombrePersona"].value;
    let apellidoPersona = this.fgValidador.controls["apellidoPersona"].value;
    let direccionPersona = this.fgValidador.controls["direccionPersona"].value;
    let celularPersona = this.fgValidador.controls["celularPersona"].value;
    let correoPersona = this.fgValidador.controls["correoPersona"].value;

    let p = new ModeloPersona();
    p.nombres = nombrePersona;
    p.apellidos = apellidoPersona;
    p.direccion = direccionPersona;
    p.celular = celularPersona;
    p.correo = correoPersona;
    this.servicioPersona.EditarPersona(p).subscribe((datos:ModeloPersona)=>{
      alert("El producto se editó correctamente");
    },(error:any)=>{
      alert("Error en la edición");
    }
    )
  }

}
